import { Platform } from "react-native";
import * as Print from "expo-print";
import html2pdf from "html2pdf.js";
import { buildSessionHtml } from "./sessionPdfTemplate";
import { Session } from "@/types/appTypes";

export async function printSessionPdf(
  session: Session,
  studentName: string
) {
  const html = buildSessionHtml(session, studentName);

//   =========================
//   🟢 MOBILE (Expo Print)
//   =========================
  if (Platform.OS !== "web") {
    await Print.printAsync({ html });
    return;
  }

  // =========================
  // 🟢 WEB (html2pdf)
  // =========================
//   const element = document.createElement("div");
//   element.innerHTML = html;

//  const opt = {
//   margin: 0,
//   filename: "session-report.pdf",
//   image: { type: "png" as const, quality: 1 },
//   html2canvas: {
//     scale: 3,
//     useCORS: true,
//     scrollY: 0,
//   },
//   jsPDF: {
//     unit: "mm" as const,
//     format: "a4",
//     orientation: "portrait" as const,
//   },

// };

//   await html2pdf().set(opt).from(element).save();
}