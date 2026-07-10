import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { Session } from "@/types/appTypes";
import { buildSessionHtml } from "./sessionPdfTemplate";

export async function shareSessionPdf(session: Session, studentName: string,teacherName:string,language:'en'|'ar') {
    const html = buildSessionHtml(session, studentName,teacherName,language);
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