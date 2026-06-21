import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import Hr from "../atoms/Hr";
import Title from "../atoms/Title";
import { MonthlyReportsFormData } from "@/types/appTypes";
import { useStudents } from "@/hooks/useStudent";
import { translations } from "../../translations/monthlyReportTranslations";
import { useProfile } from "@/hooks/useProfile";
import { useSession } from "@/hooks/useSession";
import { getMonthName } from "@/utils/getMonthName ";
import { getMonthYear } from "@/utils/getMonthYear ";
import { colors } from "@/constants/theme";
import {surahMap} from '../../translations/surahMap'
import {gradeMap} from '../../translations/sessionTranslation'

export default function MonthlyReport({
  report,
  lang,
}: {
  report: MonthlyReportsFormData;
  lang: "ar" | "en";
}) {
  if (!report) return null;

  const { students } = useStudents();
  const { profile } = useProfile();
  const { sessions,loadSessions } = useSession();


  const t = translations[lang];
  const isEn = lang === "en";

  const student = students.find(
    (s) => s.id === report.studentId
  );

  const studentSessions =useMemo(() => sessions.filter(
    (s) => s.studentId === report.studentId
  ),[student,sessions]);

  const monthSessions =useMemo(() => studentSessions.filter(
    (s) => getMonthName(s.date,'ar') == report.month
  ),  [studentSessions, report.month]
);


  const firstSession = monthSessions[0];

  console.log('monthllllllly report',student,studentSessions,monthSessions,report.month);
  return (
    <View
      style={[
        styles.container,
        { direction: isEn ? "ltr" : "rtl" } as any,
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.reportLabel}>
          {t.reportTitle}
        </Text>

        <Title size="xl">{t.subject}</Title>

        <Text style={styles.basmalah}>
          {firstSession?.date
            ? getMonthYear(
                firstSession.date,
                isEn ? "en" : "ar"
              )
            : ""}
        </Text>
      </View>

      <Hr style={{ width: "80%" }} />

      {/* Teacher / Student */}
      <View
        style={[
          styles.infoCard,
          {
            flexDirection: isEn
              ? "row"
              : "row-reverse",
          },
        ]}
      >
        <View style={styles.infoColumn}>
          <Text style={styles.label}>
            {t.teacher}
          </Text>
          <Text style={styles.value}>
            {isEn
              ? profile?.nameEn
              : profile?.nameAr}
          </Text>
        </View>

        <View style={styles.infoColumn}>
          <Text style={styles.label}>
            {t.student}
          </Text>
          <Text style={styles.value}>
            {student?.nameAr}
          </Text>
        </View>
      </View>

      {/* Details */}
      <View style={styles.detailsCard}>
        <View
          style={[
            styles.row,
            {
              backgroundColor: "#F1E7D0",
              flexDirection: isEn
                ? "column"
                : "column",
            },
          ]}
        >
          {/* -------------cards--------------*/}
          <View style={{flexDirection:'column',alignContent:'center',justifyContent:'center',gap:10}}>
            {/* one */}
          <View
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              borderRadius: 10,
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Text> {t.cards.session}</Text>
            <Text>{monthSessions.length}</Text>
          </View>
{/* --------------------two---------------------- */}
            <View
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              borderRadius: 10,
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Text> {t.cards.grade}</Text>
            <Text>{monthSessions.length}</Text>
          </View>
{/* -----------three---------------- */}
            <View
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              borderRadius: 10,
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Text> {t.cards.surah}</Text>
            <Text>{monthSessions.length}</Text>
          </View>
{/* ------------------four---------------- */}
            <View
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              padding: 10,
              borderRadius: 10,
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Text> {t.cards.surah}</Text>
            <Text>{monthSessions.length}</Text>
          </View>
          {/* ----------------------------------- */}
        </View>

</View>
        {/* Surah */}
        <View
          style={[
            styles.row,
            {
              justifyContent: "flex-start",
              flexDirection: isEn
                ? "row"
                : "row",
            },
          ]}
        >
          <Text style={styles.label}>
            {t.surah}
          </Text>
          {monthSessions.map((s) => (
            
         <View  style={{backgroundColor: colors.gray,padding:10,borderRadius:10}}> 
          <Text
            style={[
              styles.value,
              { flex: 1 },
            ]}
          >
            {lang==='ar'?s.surah:surahMap[s.surah]}
            {/* Content */}
          </Text> 
            </View>
          ))}
        </View>

        {/* Tajweed */}
        <View
          style={[
            styles.row,
            {
              flexDirection: isEn
                ? "row"
                : "row",
            },
          ]}
        >
          <Text style={styles.label}>
            {t.tajweed}
          </Text>
          {monthSessions.map((s) => (
            
         <View  style={{backgroundColor: colors.gray,padding:10,borderRadius:10}}> 
          <Text
            style={[
              styles.value,
              { flex: 1 },
            ]}
          >
            {lang==='ar'?s.tajweed:surahMap[s.surah]}
            {/* Content */}
          </Text> 
            </View>
          ))}
        </View>

        {/* grades */}
        <View
          style={[
            styles.row,
            {
              flexDirection: isEn
                ? "row"
                : "row",
            },
          ]}
        >
          <Text style={styles.label}>
            {t.grade}
          </Text>
         {monthSessions.map((s) => (
            
         <View  style={{backgroundColor: colors.gray,padding:10,borderRadius:10}}> 
          <Text
            style={[
              styles.value,
              { flex: 1 },
            ]}
          >
            {lang==='ar'?s.grade:gradeMap[s.grade]}
            {/* Content */}
          </Text> 
            </View>
          ))}
        </View>

        {/* sessions table */}
     {/* Sessions Table */}
<View style={styles.tableContainer}>
  {/* Header */}
  <View style={[styles.tableRow, styles.tableHeader]}>
    <Text style={styles.tableHeaderCell}>{t.sessionsTable.date}</Text>
    <Text style={styles.tableHeaderCell}>{t.sessionsTable.surah}</Text>
    <Text style={styles.tableHeaderCell}>{t.sessionsTable.date}</Text>
    <Text style={styles.tableHeaderCell}>{t.sessionsTable.ayats}</Text>
    <Text style={styles.tableHeaderCell}>{t.sessionsTable.notes}</Text>
  </View>

  {/* Rows */}
  {monthSessions.map((session) => (
    <View key={session.id} style={styles.tableRow}>
      <Text style={styles.tableCell}>
        {session.date}
      </Text>

      <Text style={styles.tableCell}>
        {lang==="ar"?session.surah:surahMap[session.surah]??session.surah}
      </Text>

      <Text style={styles.tableCell}>
        {session.from + " - " + session.to  }
      </Text>

      <Text style={styles.tableCell}>
        {lang==="ar"?session.grade:gradeMap[session.grade]??session.surah}
      </Text>

      <Text style={styles.tableCell}>
        {session.notes ?? "-"}
      </Text>
    </View>
  ))}
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
        <Text style={styles.footerText}>
          {t.footer}
        </Text>
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

  tableContainer: {
  marginTop: 20,
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
  padding: 10,
  textAlign: "center",
  fontWeight: "700",
  fontSize: 13,
},

tableCell: {
  flex: 1,
  padding: 10,
  textAlign: "center",
  fontSize: 12,
  color: "#374151",
},

  header: {
    alignItems: "center",
    gap: 6,
  },

  reportLabel: {
    fontSize: 14,
    color: colors.btnPrimary,
    fontWeight: "700",
  },

  basmalah: {
    fontSize: 14,
    color: colors.warning,
    fontWeight: "600",
  },

  infoCard: {
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

  row: {
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
    alignSelf: "flex-start",
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