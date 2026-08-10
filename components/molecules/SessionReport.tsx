import { colors } from "@/constants/theme";
import { useProfile } from "@/hooks/useProfile";
import { useStudents } from "@/hooks/useStudent";
import { Session } from "@/types/appTypes";
import { formatDate } from "@/utils/formatDate";
import { toEnglishDigits } from "@/utils/toEnglishDigits";
import { useFocusEffect } from "expo-router";
import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { translations } from "../../translations/sessionTranslation";
import Hr from "../atoms/Hr";
import Title from "../atoms/Title";

export default function SessionReport({
  session,
  lang,
  closeReport,
}: {
  session: Session;
  lang: "ar" | "en";
  closeReport: () => void;
}) {
  const { students } = useStudents();
  const { profile, loadProfile } = useProfile();

  const student = students.find((s) => s.id === session.studentId);

  const t = translations[lang];
  const isEn = lang === "en";
  useFocusEffect(
    useCallback(() => {
      loadProfile();
      return () => {
        closeReport();
      };
    }, []),
  );
  return (
    <View
      style={[styles.container, { direction: isEn ? "ltr" : "ltr" } as any]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.reportLabel}>{t.reportTitle}</Text>

        <Title size="xl">{t.subject}</Title>

        <Text style={styles.basmalah}>
          {isEn ? "In the name of Allah" : "بسم الله الرحمن الرحيم"}
        </Text>
      </View>

      <Hr style={{ width: "80%" }} />

      {/* Teacher / Student / Date */}
      <View
        style={[
          styles.infoCard,
          { flexDirection: isEn ? "row" : "row-reverse" },
        ]}
      >
        <View style={styles.infoColumn}>
          <Text style={styles.label}>{t.teacher}</Text>
          <Text style={styles.value}>
            {lang === "en" ? profile?.nameEn : profile?.nameAr}
          </Text>
        </View>

        <View style={styles.infoColumn}>
          <Text style={styles.label}>{t.student}</Text>
          <Text style={styles.value}>
            {lang === "en" ? student?.nameEn : student?.nameAr}
          </Text>
        </View>

        <View style={styles.infoColumn}>
          <Text style={styles.label}>{t.date}</Text>
          <Text style={styles.value}>{formatDate(session.dateTime, lang)}</Text>
        </View>
      </View>

      {/* Details */}
      <View style={styles.detailsCard}>
        {/* Grade */}
        <View
          style={[
            styles.row,
            {
              backgroundColor: "#F1E7D0",
              flexDirection: isEn ? "row" : "row-reverse",
            },
          ]}
        >
          <Text style={styles.label}>{t.grade}</Text>
          <Text style={styles.value}>{session.grade}</Text>
        </View>

        {/* Surah */}
        <View
          style={[styles.row, { flexDirection: isEn ? "row" : "row-reverse" }]}
        >
          <Text style={styles.label}>{t.surah}</Text>

        <View
  style={{
    flex: 1,
    flexDirection: isEn ? "row" : "row-reverse",
    flexWrap: "wrap",
    justifyContent: isEn ? "flex-start" : "flex-start",
    alignItems: "center",
    gap: 5,
  }}
>
  {session.surahs.length > 0 ? (
    session.surahs.map((surah) => (
      <View
        key={surah}
        style={{
          backgroundColor: colors.gray,
          borderRadius: 10,
          paddingHorizontal: 8,
          paddingVertical: 4,
        }}
      >
        <Text style={styles.quranText}>{surah}</Text>
      </View>
    ))
  ) : (
    <Text style={styles.quranText}>-</Text>
  )}
</View>
        </View>

        {/* Verses */}
        <View
          style={[styles.row, { flexDirection: isEn ? "row" : "row-reverse" }]}
        >
          <Text style={styles.label}>{t.verses}</Text>
          <Text style={[styles.value, { flex: 1 }]}>
            {isEn
              ? `${toEnglishDigits(String(session.from))} -  ${toEnglishDigits(
                  String(session.to),
                )}`
              : `${session.from} - ${session.to}`}{" "}
          </Text>
        </View>

        {/* New */}
        <View
          style={[styles.row, { flexDirection: isEn ? "row" : "row-reverse" }]}
        >
          <Text style={styles.label}>{t.new}</Text>
          <Text style={[styles.value, { flex: 1 }]}>
            {isEn ? session.newEn : session.new}
          </Text>
        </View>

        {/* Revision */}
        <View
          style={[styles.row, { flexDirection: isEn ? "row" : "row-reverse" }]}
        >
          <Text style={styles.label}>{t.revision}</Text>
          <Text style={[styles.value, { flex: 1 }]}>
            {isEn ? session.revisionEn : session.revision}
          </Text>
        </View>

        {/* Tajweed */}
        <View
          style={[styles.row, { flexDirection: isEn ? "row" : "row-reverse" }]}
        >
          <Text style={styles.label}>{t.tajweed}</Text>
          <Text style={[styles.value, { flex: 1 }]}>
            {isEn ? session.tajweedEn : session.tajweed}
          </Text>
        </View>

        {/* Notes */}
        <View
          style={[
            styles.row,
            styles.lastRow,
            { flexDirection: isEn ? "row" : "row-reverse" },
          ]}
        >
          <Text style={styles.label}>{t.notes}</Text>
          <Text style={[styles.value, { flex: 1 }]}>
            {isEn ? session.notesEn : session.notes}
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Hr
          style={{
            width: "80%",
            height: 1,
            backgroundColor: "#D1D5DB",
          }}
        />
        <Text style={styles.footerText}>{t.footer}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    margin: 12,
    gap: 20,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 2,
  },

  header: {
    display:'flex',
    justifyContent:'center',
    alignItems: "center",
    gap: 6,
  },

  reportLabel: {
    fontSize: 3,
    color: "#6B720",
    fontWeight: 500,
  },

  basmalah: {
    fontSize: 14,
    color: "#4B5563",
  },

  infoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },

  infoColumn: {
    flex: 1,
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: 6,
  },

  detailsCard: {
    borderRadius: 12,
    overflow: "hidden",
  },

  quranText: {
    fontSize: 12,
    fontWeight: "800",

    color: colors.black,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    gap: 16,
  },

  lastRow: {
    borderBottomWidth: 0,
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },

  value: {
    // flex: 1,
    // textAlign: "right",
    alignSelf: "flex-end",
    fontSize: 15,
    color: "#4B5563",
  },

  footer: {
    alignItems: "center",
    gap: 12,
    paddingTop: 8,
  },

  footerText: {
    textAlign: "center",
    fontSize: 14,
    color: "#6B7280",
  },
});
