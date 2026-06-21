import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { MonthlyReportsFormData, Session, Student, TeacherProfile } from "@/types/appTypes";
import { buildMonthlyReportHtml } from "./MonthlyReportPdfTemplate";

export async function shareMonthlyReportPdf(report: MonthlyReportsFormData, student: Student , teacher: TeacherProfile, sessions: Session[], lang: "ar" | "en") {
    const studentName = lang == "ar" ? student.nameAr : student.nameEn;
    const teacherName = lang == "ar" ? teacher.nameAr : teacher.nameEn;
    const html = buildMonthlyReportHtml(report, studentName, teacherName, sessions, lang);
 const file = await Print.printToFileAsync({
    html,
    base64: false,
     width: 595, // A4 width in points
  height: 842, // A4 height
  });

if (!file?.uri) {
  console.log("PDF generation failed");
  return;
}
  await Sharing.shareAsync(file.uri, {
    mimeType: "application/pdf",
    dialogTitle: "مشاركة التقرير",
  });
}