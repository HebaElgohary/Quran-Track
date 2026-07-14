import Header from "@/components/organisms/Header";
import { useSession } from "@/hooks/useSession";
import { useStudents } from "@/hooks/useStudent";
import {
  MonthlyReportsFormData,
  Student,
} from "@/types/appTypes";
import { Feather } from "@expo/vector-icons";
import { useEffect, useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Button from "../atoms/Button";
import MonthlyReport from "./MonthlyReport";
import { getMonthName } from "@/utils/getMonthName ";
import { shareMonthlyReportPdf } from "@/utils/shareMonthlyReportPdf";
import { useProfile } from "@/hooks/useProfile";
import { printMonthlyReport } from "@/utils/printMonthlyReport";
import Notfound from "@/animations/NotFound";
import Title from "../atoms/Title";

export default function MonthlyReportsDetails({
  closeReport,
  report,
}: {
  report: MonthlyReportsFormData;
  closeReport?: () => void;
}) {
  const { sessions } = useSession();
  const { students } = useStudents();
  const { profile,loadProfile } = useProfile();

  useEffect(()=>{loadProfile()})

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
        (s) => getMonthName(s.dateTime, "ar") === report.month
      ),
    [studentSessions, report.month]
  );
  
    // const uniqueSurahs = [...new Set(monthSessions.map((s) => s.surah))];
  
    // const uniqueGrades = [...new Set(monthSessions.map((s) => s.grade))];
  
    // const uniqueTajweed = [
    //   ...new Set(
    //     monthSessions
    //       .map((s) =>
    //       language=='en' ? s.tajweedEn ?? s.tajweed : s.tajweed
    //       )
    //       .filter(Boolean)
    //   ),
    // ];
  
  // const versesCount = monthSessions.reduce((sum, s) => {
  //   const from = Number(toEnglishDigits(s.from));
  //   const to = Number(toEnglishDigits(s.to));
  
  //   return sum + (to - from + 1);
  // }, 0);
  

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

  // print PDF 
  const [printing, setPrinting] = useState(false);

const handlePrint = async () => {
  if (printing) return;

  try {
    setPrinting(true);

    await printMonthlyReport(
      report,
      language === "en" ? student.nameEn : student.nameAr,
      language === "en" ? profile.nameEn : profile.nameAr,
      monthSessions,
      language
    );
  } finally {
    setPrinting(false);
  }
};
// ============================//

  if (!report || !student || studentSessions.length===0) {
    return <View style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#ffffff',width:'80%',padding:20 ,marginVertical:10,marginHorizontal:'auto'}}>
<Notfound />
     <Title>التقرير غير موجود</Title>
     </View>
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
          marginBottom:10
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
          onClick={handlePrint}
          disabled={printing}
        >
          <Feather name="printer" size={13} />
          <Text style={{ fontSize: 10,paddingHorizontal:4 }}>
             PDF - طباعة
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