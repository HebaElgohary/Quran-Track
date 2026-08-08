import { colors } from "@/constants/theme";
import { useProfile } from "@/hooks/useProfile";
import { useSession } from "@/hooks/useSession";
import { MonthlyReportsFormData, Session, Student, TeacherProfile } from "@/types/appTypes";
import { formatDate } from "@/utils/formatDate";
import { getMonthYear } from "@/utils/getMonthYear "; // Fixed trailing space
import { toEnglishDigits } from "@/utils/toEnglishDigits";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useMemo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { translations } from "../../translations/monthlyReportTranslations";
import { gradeMap } from "../../translations/sessionTranslation";
import { surahMap } from "../../translations/surahMap";
import Hr from "../atoms/Hr";
import Title from "../atoms/Title";

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
  // 1. FIXED: All Hooks moved to the top of the component body
  console.log(student)
  const { loadProfile } = useProfile();
  const {  loadSessions } = useSession();

  // 2. FIXED: Added 'loadSessions' and 'loadProfile' to the dependency array
  useFocusEffect(
    useCallback(() => {
      loadSessions();
      loadProfile();
    }, [loadSessions, loadProfile]),
  );

  const t = translations[lang];
  const isEn = lang === "en";

  // Use optional chaining or safe fallback in selectors since report might be undefined

    console.log('monthSessions',monthSessions)
const uniqueSurahs = useMemo(
  () => [...new Set(monthSessions.flatMap((s) => s.surahs))],
  [monthSessions],
);  

  console.log('uniqueSurahs',uniqueSurahs)

    const uniqueGrades = monthSessions.filter((s) => s.grade);
  console.log('grades',uniqueGrades)
    const uniqueTajweed = [
      ...new Set(
        monthSessions
          .map((s) =>
          lang=='en' ? s.tajweedEn ?? s.tajweed : s.tajweed
          )
          .filter(Boolean)
      ),
    ];
  


  const getVerseCount = (from: string | number, to: string | number) => {
    const start = Number(toEnglishDigits(String(from)));
    const end = Number(toEnglishDigits(String(to)));

    if (Number.isNaN(start) || Number.isNaN(end)) return 0;

    return Math.max(end - start + 1, 0);
  };

  const versesCount = useMemo(
    () =>
      monthSessions.reduce(
        (sum, session) => sum + getVerseCount(session.from, session.to),
        0,
      ),
    [monthSessions],
  );

  const firstSession = monthSessions[0];

  // 3. FIXED: Safe early return can only be declared after all hook definitions
  if (!report) return null;

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { direction: isEn ? "ltr" : "rtl" } as any,
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.reportLabel}>{t.reportTitle}</Text>
        <Title size="xl">{t.subject}</Title>

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
          <Text style={styles.statValue}>{versesCount + ' '}</Text>
        </View>
      </View>

      {/* Surah */}
      <View style={styles.section}>
        <Text style={styles.label}>{t.surah}</Text>
        {/* <View style={styles.tagsRow}>
          {uniqueSurahs.map((surahs) => (
            <View key={surah} style={styles.tag}>
              <Text style={styles.tagText}>
                {isEn ? (surahMap[surah] ?? surah) : surah}
              </Text>
            </View>
          ))}
        </View> */}
      </View>

      {/* Tajweed */}
      <View style={styles.section}>
        <Text style={styles.label}>{t.tajweed}</Text>
        <View style={styles.tagsRow}>
          {uniqueTajweed.map((tajweed, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tajweed}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Grade */}
      <View style={styles.section}>
        <Text style={styles.label}>{t.grade}</Text>
        <View style={styles.tagsRow}>
          {uniqueGrades.map((s) => (
            <View key={s.grade} style={styles.tag}>
              <Text style={styles.tagText}>
                {isEn ? (gradeMap[s.grade] ?? s.grade) : s.grade}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Table */}
      <View style={styles.tableContainer}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={styles.tableHeaderCell}>{t.sessionsTable.date}</Text>
          <Text style={styles.tableHeaderCell}>{t.sessionsTable.surah}</Text>
          <Text style={styles.tableHeaderCell}>{t.sessionsTable.ayats}</Text>
          <Text style={styles.tableHeaderCell}>{t.sessionsTable.notes}</Text>
        </View>

        {monthSessions.map((session) => (
          <View key={session.id} style={styles.tableRow}>
            <Text style={styles.tableCell}>
              {formatDate(session.dateTime, lang)}
            </Text>

     <View style={styles.tableCell}>
  {uniqueSurahs.length > 0 ? (
    uniqueSurahs.map((surah) => (
      <View
        key={surah}
        style={{
          backgroundColor: colors.secondary,
          borderRadius: 10,
          paddingHorizontal: 8,
          paddingVertical: 4,
          marginBottom: 4,
        }}
      >
        <Text style={styles.quranText}>
          {lang === "ar"
            ? surah
            : (surahMap[surah] ?? surah)}
        </Text>
      </View>
    ))
  ) : (
    <Text style={styles.quranText}>-</Text>
  )}
</View>

            <Text style={styles.tableCell}>
              {isEn
                ? `${toEnglishDigits(String(session.from))} - ${toEnglishDigits(
                    String(session.to),
                  )}`
                : `${session.from} - ${session.to}`}{" "}
            </Text>

            <Text style={styles.tableCell}>
              {isEn
                ? (session.notesEn ?? session.notes ?? "-")
                : (session.notes ?? "-")}{" "}
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
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  tableHeaderCell: {
    flex: 1,
    padding: 8,
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
  },

  tableCell: {
    flex: 1,
    padding: 8,
    fontSize: 11,
    textAlign: "center",
    color: "#374151",
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