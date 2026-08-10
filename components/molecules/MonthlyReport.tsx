import { colors } from "@/constants/theme";
import { useProfile } from "@/hooks/useProfile";
import { useSession } from "@/hooks/useSession";
import {
  MonthlyReportsFormData,
  Session,
  Student,
  TeacherProfile,
} from "@/types/appTypes";
import { formatDate } from "@/utils/formatDate";
import { getMonthYear } from "@/utils/getMonthYear ";
import { toEnglishDigits } from "@/utils/toEnglishDigits";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useMemo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { translations } from "../../translations/monthlyReportTranslations";
import { gradeMap } from "../../translations/sessionTranslation";
import { surahMap } from "../../translations/surahMap";

import Hr from "../atoms/Hr";

export default function MonthlyReport({
  report,
  lang,
  student,
  monthSessions,
  profile,
}: {
  report: MonthlyReportsFormData;
  lang: "ar" | "en";
  student: Student;
  monthSessions: Session[];
  profile: TeacherProfile;
}) {
  console.log("student", student);

  const { loadProfile } = useProfile();
  const { loadSessions } = useSession();

  useFocusEffect(
    useCallback(() => {
      loadSessions();
      loadProfile();
    }, [loadSessions, loadProfile]),
  );

  const t = translations[lang];
  const isEn = lang === "en";

  console.log("monthSessions", monthSessions);

  // Unique Surahs
  const uniqueSurahs = useMemo(
    () => [...new Set(monthSessions.flatMap((s) => s.surahs ?? []))],
    [monthSessions],
  );

  console.log("uniqueSurahs", uniqueSurahs);

  // Grades that have a value
  const uniqueGrades = useMemo(
    () => monthSessions.filter((s) => Boolean(s.grade)),
    [monthSessions],
  );

  console.log("grades", uniqueGrades);

  // Unique Tajweed
  const uniqueTajweed = useMemo(
    () => [
      ...new Set(
        monthSessions
          .map((s) => (lang === "en" ? (s.tajweedEn ?? s.tajweed) : s.tajweed))
          .filter(Boolean),
      ),
    ],
    [monthSessions, lang],
  );

  /**
   * Calculate number of verses between from and to.
   *
   * Example:
   * from = 1
   * to = 10
   * result = 10
   */
  const getVerseCount = (
    from: string | number | undefined,
    to: string | number | undefined,
  ) => {
    if (from === undefined || to === undefined) {
      return 0;
    }

    const start = Number(toEnglishDigits(String(from)).trim());

    const end = Number(toEnglishDigits(String(to)).trim());

    // Invalid numbers
    if (Number.isNaN(start) || Number.isNaN(end)) {
      return 0;
    }

    // Invalid / empty range
    if (start <= 0 || end <= 0) {
      return 0;
    }

    // "from" should not be greater than "to"
    if (start > end) {
      return 0;
    }

    return end - start + 1;
  };

  /**
   * Total verses for all sessions in the month.
   */
  const versesCount = useMemo(() => {
    return monthSessions.reduce((total, session) => {
      return total + getVerseCount(session.from, session.to);
    }, 0);
  }, [monthSessions]);

  console.log("versesCount", versesCount);

  const firstSession = monthSessions[0];

  if (!report) {
    return null;
  }

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {
          direction: isEn ? "ltr" : "rtl",
        } as any,
      ]}
    >
      {/* Header */}

      <View>
        <Text style={styles.basmalah}>{t.reportTitle}</Text>

        <Text style={styles.basmalah}>{t.subject}</Text>

        <Text style={styles.basmalah}>
          {firstSession?.dateTime
            ? getMonthYear(firstSession.dateTime, isEn ? "en" : "ar")
            : ""}
        </Text>
      </View>

      <Hr style={{ width: "90%" }} />

      {/* Teacher / Student */}

      <View
        style={[
          styles.infoCard,
          {
            flexDirection: isEn ? "row" : "row-reverse",
          },
        ]}
      >
        <View style={styles.infoColumn}>
          <Text style={styles.label}>{t.teacher}</Text>

          <Text style={styles.value}>
            {isEn ? profile?.nameEn : profile?.nameAr}
          </Text>
        </View>

        <View style={styles.infoColumn}>
          <Text style={styles.label}>{t.student}</Text>

          <Text style={styles.value}>
            {isEn ? student?.nameEn : student?.nameAr}
          </Text>
        </View>
      </View>

      {/* Stats Cards */}

      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>{t.cards.session}</Text>

          <Text style={styles.statValue}>{monthSessions.length}</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>{t.cards.grade}</Text>

          <Text style={styles.statValue}>{uniqueGrades.length}</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>{t.cards.surah}</Text>

          <Text style={styles.statValue}>{uniqueSurahs.length}</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statLabel}>{t.cards.verses}</Text>

          <Text
            style={{
              ...styles.statValue,
              fontSize: 20,
              width: 50,
              textAlign: "center",
            }}
          >
            {String(versesCount)}
          </Text>
        </View>
      </View>

      {/* Surah */}

      <View style={styles.section}>
        <Text style={styles.label}>{t.surah}</Text>

        <View style={styles.tagsRow}>
          {uniqueSurahs.map((surah) => (
            <View key={surah} style={styles.tag}>
              <Text style={styles.tagText}>
                {isEn ? (surahMap[surah] ?? surah) : surah}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Tajweed */}

      <View style={styles.section}>
        <Text style={styles.label}>{t.tajweed}</Text>

        <View style={styles.tagsRow}>
          {uniqueTajweed.map((tajweed, index) => (
            <View key={`${tajweed}-${index}`} style={styles.tag}>
              <Text style={styles.tagText}>{tajweed}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Grade */}

      <View style={styles.section}>
        <Text style={styles.label}>{t.grade}</Text>

        <View style={styles.tagsRow}>
          {uniqueGrades.map((session) => (
            <View key={session.id} style={styles.tag}>
              <Text style={styles.tagText}>
                {isEn
                  ? (gradeMap[session.grade] ?? session.grade)
                  : session.grade}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Table */}

      <View style={styles.tableContainer}>
        {/* Table Header */}

        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={styles.tableHeaderCell}>{t.sessionsTable.date}</Text>

          <Text style={styles.tableHeaderCell}>{t.sessionsTable.surah}</Text>

          <Text style={styles.tableHeaderCell}>{t.sessionsTable.ayats}</Text>

          <Text style={styles.tableHeaderCell}>{t.sessionsTable.notes}</Text>
        </View>

        {/* Table Rows */}

        {monthSessions.map((session) => (
          <View key={session.id} style={styles.tableRow}>
            {/* Date */}

            <Text style={styles.tableCell}>
              {formatDate(session.dateTime, lang)}
            </Text>

            {/* Surah */}

            <View style={styles.tableCell}>
              {session.surahs?.length > 0 ? (
                session.surahs.map((surah) => (
                  <View
                    key={surah}
                    style={{
                      backgroundColor: colors.gray,
                      borderRadius: 10,
                      paddingHorizontal: 8,
                      paddingVertical: 4,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 4,
                    }}
                  >
                    <Text style={styles.quranText}>
                      {lang === "ar" ? surah : (surahMap[surah] ?? surah)}
                    </Text>
                  </View>
                ))
              ) : (
                <Text style={styles.quranText}>-</Text>
              )}
            </View>

            {/* Ayats */}

            <Text style={styles.tableCell}>
              {isEn
                ? `${toEnglishDigits(String(session.from))} - ${toEnglishDigits(
                    String(session.to),
                  )}`
                : `${session.from} - ${session.to}`}
            </Text>

            {/* Notes */}

            <Text style={styles.tableCell}>
              {isEn
                ? (session.notesEn ?? session.notes ?? "-")
                : (session.notes ?? "-")}
            </Text>
          </View>
        ))}
      </View>

      {/* Footer */}

      <View style={styles.footer}>
        <Hr style={{ width: "90%" }} />

        <Text style={styles.footerText}>{t.footer}</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 14,
    backgroundColor: "#fff",
    paddingBottom: 40,
  },

  header: {
    alignItems: "center",
    marginBottom: 12,
  },

  reportLabel: {
    fontSize: 14,
    color: colors.btnPrimary,
    fontWeight: "700",
  },

  basmalah: {
    fontSize: 13,
    color: colors.warning,
    fontWeight: "600",
    marginTop: 4,
  },

  infoCard: {
    justifyContent: "space-between",
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    padding: 12,
    marginVertical: 10,
  },

  infoColumn: {
    flex: 1,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  quranText: {
    fontSize: 12,
    fontWeight: "800",

    color: colors.black,
  },

  value: {
    fontSize: 14,
    color: "#4B5563",
  },

  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },

  statCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    alignItems: "center",
  },

  statValue: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.btnPrimary,
              width: 50,
              textAlign: "center",
  },

  statLabel: {
    fontSize: 12,
    color: "#6B7280",
  },

  section: {
    marginTop: 14,
  },

  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },

  tag: {
    backgroundColor: colors.gray,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginRight: 6,
    marginBottom: 6,
  },

  tagText: {
    fontSize: 12,
  },

  tableContainer: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    overflow: "hidden",
  },

  tableHeader: {
    backgroundColor: "#F3F4F6",
  },

  tableRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderWidth: 1,
    borderColor: colors.gray,
    fontWeight: 800,
    borderBottomColor: "#E5E7EB",
  },

  tableHeaderCell: {
    flex: 1,
    padding: 8,
    fontSize: 11,
    borderWidth: 1,
    borderColor: colors.gray,
    fontWeight: "700",
    textAlign: "center",
  },

  tableCell: {
    flex: 1,
    padding: 8,
    fontSize: 11,
    textAlign: "center",
    color: "#374151",
    borderLeftWidth: 1,
    borderLeftColor: colors.gray,
  },

  footer: {
    marginTop: 20,
    alignItems: "center",
  },

  footerText: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 6,
  },
});
