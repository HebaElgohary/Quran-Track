import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { Session } from "@/types/appTypes";
import { buildSessionHtml } from "./sessionPdfTemplate";

export async function shareMonthlyReportPdf(session: Session, studentName: string) {
    const html = buildSessionHtml(session, studentName);
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