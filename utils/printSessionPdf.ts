import { Platform } from "react-native";
import * as Print from "expo-print";
import { buildSessionHtml } from "./sessionPdfTemplate";
import { Session } from "@/types/appTypes";
import { buildEnglishSession } from "./buildEnglishSession";

export async function printSessionPdf(
  session: Session,
  studentName: string,
  teacherName:string,
  language:'en'|'ar'

) {
  const displaySession=language=='ar'?session:buildEnglishSession(session)
  const html = buildSessionHtml(displaySession, studentName,teacherName,language)

//   =========================
//   🟢 MOBILE (Expo Print)
//   =========================
  if (Platform.OS !== "web") {
    await Print.printAsync({ html });
    return;
  }

  // =========================
  // 🟢 WEB (html2pdf)
//   =========================
  const html2pdf = (await import("html2pdf.js")).default;

  const element = document.createElement("div");
  element.innerHTML = html;

 const opt = {
  margin: 0,
  filename: "session-report.pdf",
  image: { type: "png" as const, quality: 1 },
  html2canvas: {
    scale: 3,
    useCORS: true,
    scrollY: 0,
  },
  jsPDF: {
    unit: "mm" as const,
    format: "a4",
    orientation: "portrait" as const,
  },

};

  await html2pdf().set(opt).from(element).save();
}