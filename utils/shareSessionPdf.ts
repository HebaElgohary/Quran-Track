import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import { Session } from "@/types/appTypes";

export async function shareSessionPdf(
  session: Session,
  studentName: string
) {
  const html = `
<!DOCTYPE html>
<html dir="rtl">
<head>
<meta charset="UTF-8" />

<style>
*{
  box-sizing:border-box;
}

body{
  font-family: Arial, sans-serif;
  background:#f5f5f5;
  padding:24px;
}

.card{
  background:white;
  border-radius:16px;
  padding:24px;
  box-shadow:0 2px 10px rgba(0,0,0,.08);
}

.header{
  text-align:center;
}

.reportLabel{
  color:#6B7280;
  font-size:14px;
}

.title{
  font-size:28px;
  font-weight:bold;
  margin:8px 0;
}

.basmalah{
  color:#4B5563;
}

hr{
  margin:20px 0;
  border:none;
  border-top:1px solid #E5E7EB;
}

.infoCard{
  display:flex;
  justify-content:space-between;
  background:#F9FAFB;
  border-radius:12px;
  padding:16px;
  margin-bottom:20px;
}

.infoItem{
  text-align:center;
}

.infoLabel{
  font-weight:bold;
  margin-bottom:8px;
}

.details{
  border-radius:12px;
  overflow:hidden;
  border:1px solid #E5E7EB;
}

.row{
  display:flex;
  justify-content:space-between;
  padding:14px 16px;
  border-bottom:1px solid #E5E7EB;
}

.grade{
  background:#F1E7D0;
}

.label{
  font-weight:bold;
}

.value{
  color:#4B5563;
}

.footer{
  margin-top:30px;
  text-align:center;
}

.footerText{
  color:#6B7280;
}
</style>
</head>

<body>

<div class="card">

<div class="header">
<div class="reportLabel">تقرير حصة</div>
<div class="title">القرآن الكريم والتجويد</div>
<div class="basmalah">بسم الله الرحمن الرحيم</div>
</div>

<hr />

<div class="infoCard">

<div class="infoItem">
<div class="infoLabel">اسم المعلم</div>
<div>الأستاذ معاذ</div>
</div>

<div class="infoItem">
<div class="infoLabel">اسم الطالب</div>
<div>${studentName}</div>
</div>

<div class="infoItem">
<div class="infoLabel">التاريخ</div>
<div>${session.date}</div>
</div>

</div>

<div class="details">

<div class="row grade">
<div class="label">التقييم</div>
<div>${session.grade ?? ""}</div>
</div>

<div class="row">
<div class="label">السورة</div>
<div>${session.surah ?? ""}</div>
</div>

<div class="row">
<div class="label">الآيات</div>
<div>${session.from ?? ""} - ${session.to ?? ""}</div>
</div>

<div class="row">
<div class="label">الحفظ الجديد</div>
<div>${session.new ?? ""}</div>
</div>

<div class="row">
<div class="label">المراجعة</div>
<div>${session.revision ?? ""}</div>
</div>

<div class="row">
<div class="label">أحكام التجويد</div>
<div>${session.tajweed ?? ""}</div>
</div>

<div class="row">
<div class="label">ملاحظات</div>
<div>${session.notes ?? ""}</div>
</div>

</div>

<div class="footer">
<hr />
<div class="footerText">
جزاكم الله خيرًا وجعلكم من أهل القرآن
</div>
</div>

</div>

</body>
</html>
`;

  const { uri } = await Print.printToFileAsync({
    html,
  });

  await Sharing.shareAsync(uri);
}