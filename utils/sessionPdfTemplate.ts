import { Session } from "@/types/appTypes";

export function buildSessionHtml(session: Session, studentName: string) {
  return `
<html dir="rtl">
<head>
<title>تقرير الحصة</title>

<style>
body {
  font-family: Arial;
  margin: 0;
  padding: 24px;
  background: white;
}

.container {
  width: 100%;
}

.section {
  margin-bottom: 12px;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.title {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
</style>
</head>

<body>

<div class="container">

<div class="title">
تقرير الحصة - القرآن الكريم والتجويد
</div>

<div class="section">اسم المعلم: معاذ</div>
<div class="section">اسم الطالب: ${studentName}</div>
<div class="section">التاريخ: ${session.date}</div>

<div class="section">التقييم: ${session.grade ?? ""}</div>
<div class="section">السورة: ${session.surah ?? ""}</div>
<div class="section">الآيات: ${session.from ?? ""} - ${session.to ?? ""}</div>
<div class="section">الحفظ: ${session.new ?? ""}</div>
<div class="section">المراجعة: ${session.revision ?? ""}</div>
<div class="section">التجويد: ${session.tajweed ?? ""}</div>
<div class="section">ملاحظات: ${session.notes ?? ""}</div>

<div class="section" style="text-align:center;margin-top:20px;">
جزاكم الله خيرًا وجعلكم من أهل القرآن
</div>

</div>

</body>
</html>
`;
}