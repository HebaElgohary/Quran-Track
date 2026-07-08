import Header from "@/components/organisms/Header";
import { useSession } from "@/hooks/useSession";
import { useStudents } from "@/hooks/useStudent";
import {
  MonthlyReportsFormData,
  Student,
} from "@/types/appTypes";
import { Feather } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Button from "../atoms/Button";
import MonthlyReport from "./MonthlyReport";
import { getMonthName } from "@/utils/getMonthName ";
import { shareMonthlyReportPdf } from "@/utils/shareMonthlyReportPdf";
import { useProfile } from "@/hooks/useProfile";

export default function MonthlyReportsDetails({
  closeReport,
  report,
}: {
  report: MonthlyReportsFormData;
  closeReport?: () => void;
}) {
  const { sessions } = useSession();
  const { students } = useStudents();
  const { profile } = useProfile();

  const [language, setLanguage] = useState<"ar" | "en">("ar");

  // Student
  const student = students.find(
    (s) => s.id === report.studentId
  ) as Student;

  // Sessions for this student
  const studentSessions = useMemo(
    () => sessions.filter((s) => s.studentId === report.studentId),
    [sessions, report.studentId]
  );

  // Sessions for selected month
  const monthSessions = useMemo(
    () =>
      studentSessions.filter(
        (s) => getMonthName(s.date, "ar") === report.month
      ),
    [studentSessions, report.month]
  );

  // Share PDF
  const handleWhatsappShare = async () => {
    if (!report || !student) return;

    await shareMonthlyReportPdf(
      report,
      student,
      profile,
      monthSessions,
      language
    );
  };

  if (!report || !student) {
    return <Text>التقرير غير موجود</Text>;
  }

  return (
    <View>
      <Header title="تقرير الحصة" />

      {/* Actions */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 14,
        }}
      >
        {/* Language Switch */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: 160,
            height: 40,
            backgroundColor: "#EEEEEE",
            borderRadius: 15,
          }}
        >
          <Pressable
            onPress={() => setLanguage("en")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 70,
              height: 35,
              borderRadius: 20,
              backgroundColor:
                language === "en" ? "#FFFFFF" : "#EEEEEE",
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: "600" }}>
              English
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setLanguage("ar")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 70,
              height: 35,
              borderRadius: 20,
              backgroundColor:
                language === "ar" ? "#FFFFFF" : "#EEEEEE",
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: "600" }}>
              العربية
            </Text>
          </Pressable>
        </View>

        {/* Share */}
        <Button
          size="md"
          variant="gray"
          textColor="black"
          onClick={handleWhatsappShare}
        >
          <Text style={{ fontSize: 10, marginLeft: 8 }}>
            مشاركة
          </Text>
          <Feather
            name="share-2"
            size={12}
            color="black"
          />
        </Button>

        {/* Print */}
        <Button
          size="lg"
          onClick={() => {
            // TODO: Implement printMonthlyReportPdf(...)
          }}
        >
          <Feather name="printer" size={13} />
          <Text style={{ fontSize: 10 }}>
            PDF / طباعة
          </Text>
        </Button>
      </View>

      {/* Report */}
      <MonthlyReport
        report={report}
        lang={language}
      />
    </View>
  );
}