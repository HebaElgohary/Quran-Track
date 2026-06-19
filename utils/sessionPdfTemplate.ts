import { Session } from "@/types/appTypes";

export function buildSessionHtml(
  session: Session,
  studentName: string
) {
  return `
<!DOCTYPE html>
<html dir="rtl">
<head>
<meta charset="UTF-8" />
<title>تقرير الحصة</title>

<style>

*{
  box-sizing:border-box;
}

body{
  margin:0;
  padding:20px;
  background:#f5f5f5;
  font-family:Arial,sans-serif;
}

.container{
  background:#FFFFFF;
  border-radius:16px;
  padding:20px;
  max-width:900px;
  margin:auto;
}

.header{
  text-align:center;
}

.reportLabel{
  font-size:14px;
  color:#6B7280;
  font-weight:500;
}

.title{
  font-size:28px;
  font-weight:700;
  margin:8px 0;
}

.basmalah{
  font-size:14px;
  color:#4B5563;
}

.hr{
  width:80%;
  height:1px;
  background:#D1D5DB;
  margin:20px auto;
}

.infoCard{
  display:flex;
  justify-content:space-between;
  gap:12px;

  background:#F9FAFB;
  border-radius:12px;
  padding:16px;
}

.infoColumn{
  flex:1;
}

.label{
  font-size:15px;
  font-weight:600;
  color:#111827;
  margin-bottom:6px;
}

.value{
  font-size:15px;
  color:#4B5563;
}

.detailsCard{
  margin-top:20px;
  border-radius:12px;
  overflow:hidden;
}

.row{
  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:14px 16px;

  border-bottom:1px solid #E5E7EB;
}

.gradeRow{
  background:#F1E7D0;
}

.footer{
  text-align:center;
  margin-top:20px;
}

.footerText{
  color:#6B7280;
  font-size:14px;
}

.longText{
  max-width:70%;
  text-align:left;
  word-break:break-word;
}

</style>
</head>

<body>

<div class="container">

  <div class="header">
    <div class="reportLabel">تقرير حصة</div>

    <div class="title">
      القرآن الكريم والتجويد
    </div>

    <div class="basmalah">
      بسم الله الرحمن الرحيم
    </div>
  </div>

  <div class="hr"></div>

  <div class="infoCard">

    <div class="infoColumn">
      <div class="label">اسم المعلم</div>
      <div class="value">الأستاذ معاذ</div>
    </div>

    <div class="infoColumn">
      <div class="label">اسم الطالب</div>
      <div class="value">${studentName}</div>
    </div>

    <div class="infoColumn">
      <div class="label">التاريخ</div>
      <div class="value">${session.date ?? ""}</div>
    </div>

  </div>

  <div class="detailsCard">

    <div class="row gradeRow">
      <div class="label">التقييم</div>
      <div class="value">${session.grade ?? ""}</div>
    </div>

    <div class="row">
      <div class="label">السورة</div>
      <div class="value">${session.surah ?? ""}</div>
    </div>

    <div class="row">
      <div class="label">الآيات</div>
      <div class="value">
        ${session.from ?? ""} - ${session.to ?? ""}
      </div>
    </div>

    <div class="row">
      <div class="label">الحفظ الجديد</div>
      <div class="value longText">
        ${session.new ?? ""}
      </div>
    </div>

    <div class="row">
      <div class="label">المراجعة</div>
      <div class="value longText">
        ${session.revision ?? ""}
      </div>
    </div>

    <div class="row">
      <div class="label">أحكام التجويد</div>
      <div class="value longText">
        ${session.tajweed ?? ""}
      </div>
    </div>

    <div class="row" style="border-bottom:none">
      <div class="label">ملاحظة</div>
      <div class="value longText">
        ${session.notes ?? ""}
      </div>
    </div>

  </div>

  <div class="footer">
    <div class="hr"></div>

    <div class="footerText">
      جزاكم الله خيرًا وجعلكم من أهل القرآن
    </div>
  </div>

</div>

</body>
</html>
`;
}