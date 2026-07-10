import { Session } from "@/types/appTypes";
import { formatDate } from "./formatDate";

export function buildSessionHtml(
  session: Session,
  studentName: string,
  teacherName:string,
  language:'en'|'ar'
) {
  return `
<!DOCTYPE html>
<html dir="rtl" lang=${language}>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${language=='en'?'Session Report':'تقرير الحصة '} </title>

<style>

*{
  box-sizing:border-box;
}

body{
  margin:0;
  padding:20px;
  background:#f5f5f5;
  font-family:Arial,sans-serif;
  color:#111827;
}

.container{
  background:#FFFFFF;
  border-radius:16px;
  padding:24px;
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
  gap:16px;

  background:#F9FAFB;
  border-radius:12px;
  padding:16px;
}

.infoColumn{
  flex:1;
  text-align:start;
}

.infoLabel{
  font-size:14px;
  font-weight:600;
  color:#6B7280;
  margin-bottom:6px;
}

.infoValue{
  font-size:15px;
  color:#111827;
  font-weight:500;
}

.detailsCard{
  margin-top:20px;
  border-radius:12px;
  overflow:hidden;
  border:1px solid #E5E7EB;
}

.row{
  display:grid;
  grid-template-columns:140px 1fr;
  gap:16px;
  align-items:start;

  padding:14px 16px;
  border-bottom:1px solid #E5E7EB;
}

.row:last-child{
  border-bottom:none;
}

.gradeRow{
  background:#F1E7D0;
}

.label{
  font-size:15px;
  font-weight:600;
  color:#111827;

  text-align:start;
}

.value{
  font-size:15px;
  color:#4B5563;

  text-align:start;
  word-break:break-word;
  overflow-wrap:anywhere;
  white-space:pre-wrap;
}

.footer{
  text-align:center;
  margin-top:24px;
}

.footerText{
  color:#6B7280;
  font-size:14px;
}

@media print{
  body{
    background:white;
    padding:0;
  }

  .container{
    max-width:100%;
    margin:0;
    box-shadow:none;
  }
}

</style>
</head>

<body>

<div class="container">

  <div class="header">
    <div class="reportLabel">
      ${language=='en'?'Session Report':'تقرير حصة '}
    </div>

    <div class="title">
      ${language=='en'?'The Noble Quran ':' القران الكريم '}
    </div>

    <div class="basmalah">
      ${language=='en'?' Report':' بسم الله الرحمن الرحيم '} 
    </div>
  </div>

  <div class="hr"></div>

  <div class="infoCard">

    <div class="infoColumn">
      <div class="infoLabel">${language=='en'?'Teacher Name':'اسم المعلم'} </div>
      <div class="infoValue"> ${language=='en'?`Mr ${teacherName} `:`الاستاذ ${teacherName} `}</div>
    </div>

    <div class="infoColumn">
      <div class="infoLabel">${language=='en'?`Student Name`:`اسم الطالب`} </div>
      <div class="infoValue">${studentName ?? ""}</div>
    </div>

    <div class="infoColumn">
      <div class="infoLabel">التاريخ</div>
      <div class="infoValue">${formatDate(session.date) ?? ""}</div>
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
      <div class="value">
        ${session.new ?? ""}
      </div>
    </div>

    <div class="row">
      <div class="label">المراجعة</div>
      <div class="value">
        ${session.revision ?? ""}
      </div>
    </div>

    <div class="row">
      <div class="label">أحكام التجويد</div>
      <div class="value">
        ${session.tajweed ?? ""}
      </div>
    </div>

    <div class="row">
      <div class="label">ملاحظة</div>
      <div class="value">
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