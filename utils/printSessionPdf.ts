import * as Print from "expo-print";
import { Session } from "@/types/appTypes";

export async function printSessionPdf(session: Session, studentName: string) {
  const html = `
<!DOCTYPE html>
<html dir="rtl">
<head>
<meta charset="UTF-8" />
<title>تقرير الحصة</title>

<style>
body {
  font-family: Arial;
  padding: 24px;
  background: white;
}
.infoCard {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.row {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eee;
}
</style>
</head>

<body>

<div class="infoCard">
  <div>المعلم: معاذ</div>
  <div>الطالب: ${studentName}</div>
  <div>التاريخ: ${session.date}</div>
</div>

<div>
  <div class="row">التقييم: ${session.grade ?? ""}</div>
  <div class="row">السورة: ${session.surah ?? ""}</div>
  <div class="row">من: ${session.from ?? ""} - إلى: ${session.to ?? ""}</div>
  <div class="row">الحفظ: ${session.new ?? ""}</div>
  <div class="row">المراجعة: ${session.revision ?? ""}</div>
  <div class="row">التجويد: ${session.tajweed ?? ""}</div>
  <div class="row">ملاحظات: ${session.notes ?? ""}</div>
</div>

</body>
</html>
`;

  await Print.printAsync({
    html,
  });
}