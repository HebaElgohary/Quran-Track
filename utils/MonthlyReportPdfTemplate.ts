import { MonthlyReportsFormData, Session } from "@/types/appTypes";
import { formatDate } from "./formatDate";
import { getMonthYear } from "@/utils/getMonthYear ";
import { surahMap } from "@/translations/surahMap";
import { gradeMap } from "@/translations/sessionTranslation";

export function buildMonthlyReportHtml(
  report: MonthlyReportsFormData,
  studentName: string,
  teacherName: string,
  sessions: Session[],
  lang: "ar" | "en"
) {
  const isEn = lang === "en";

  const studentSessions = sessions.filter(
    (s) => s.studentId === report.studentId
  );

  const monthSessions = studentSessions.filter(
    (s) => s.date && s.date.includes(report.month)
  );

  const firstSession = monthSessions[0];

  return `
<!DOCTYPE html>
<html dir="${isEn ? "ltr" : "rtl"}" lang="${lang}">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Monthly Report</title>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 20px;
  background: #f5f5f5;
  font-family: Arial, sans-serif;
  color: #111827;
}

.container {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  max-width: 900px;
  margin: auto;
}

.header {
  text-align: center;
}

.reportLabel {
  font-size: 14px;
  color: #6B7280;
  font-weight: 600;
}

.title {
  font-size: 26px;
  font-weight: 700;
  margin: 8px 0;
}

.subtitle {
  font-size: 14px;
  color: #4B5563;
}

.hr {
  height: 1px;
  background: #D1D5DB;
  margin: 20px 0;
}

.infoCard {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  background: #F9FAFB;
  padding: 16px;
  border-radius: 12px;
}

.infoBox {
  flex: 1;
}

.label {
  font-size: 13px;
  font-weight: 600;
  color: #6B7280;
  margin-bottom: 4px;
}

.value {
  font-size: 14px;
  color: #111827;
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
}

.statCard {
  flex: 1 1 45%;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 12px;
  text-align: center;
}

.statValue {
  font-size: 18px;
  font-weight: 700;
  color: #2563EB;
}

.statLabel {
  font-size: 12px;
  color: #6B7280;
}

.section {
  margin-top: 18px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}

.tag {
  background: #F3F4F6;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
}

.table {
  margin-top: 20px;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  overflow: hidden;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 10px;
  border-bottom: 1px solid #E5E7EB;
  font-size: 12px;
}

.headerRow {
  background: #F3F4F6;
  font-weight: 700;
}

.footer {
  text-align: center;
  margin-top: 24px;
  color: #6B7280;
  font-size: 13px;
}

@media print {
  body {
    background: white;
    padding: 0;
  }
  .container {
    box-shadow: none;
  }
}
</style>
</head>

<body>

<div class="container">

  <!-- HEADER -->
  <div class="header">
    <div class="reportLabel">تقرير شهري</div>
    <div class="title">القرآن الكريم والتجويد</div>
    <div class="subtitle">
      ${firstSession?.date ? getMonthYear(firstSession.date, lang) : ""}
    </div>
  </div>

  <div class="hr"></div>

  <!-- INFO -->
  <div class="infoCard">
    <div class="infoBox">
      <div class="label">المعلم</div>
      <div class="value">${teacherName ?? ""}</div>
    </div>

    <div class="infoBox">
      <div class="label">الطالب</div>
      <div class="value">${studentName ?? ""}</div>
    </div>
  </div>

  <!-- STATS -->
  <div class="stats">
    <div class="statCard">
      <div class="statValue">${monthSessions.length}</div>
      <div class="statLabel">الحصص</div>
    </div>

    <div class="statCard">
      <div class="statValue">${monthSessions.length}</div>
      <div class="statLabel">الدرجات</div>
    </div>

    <div class="statCard">
      <div class="statValue">${monthSessions.length}</div>
      <div class="statLabel">السور</div>
    </div>

    <div class="statCard">
      <div class="statValue">${monthSessions.length}</div>
      <div class="statLabel">التقييم</div>
    </div>
  </div>

  <!-- SESSIONS TABLE -->
  <div class="table">

    <div class="row headerRow">
      <div>التاريخ</div>
      <div>السورة</div>
      <div>الآيات</div>
      <div>ملاحظات</div>
    </div>

    ${monthSessions
      .map(
        (s) => `
      <div class="row">
        <div>${formatDate(s.date)}</div>
        <div>${isEn ? surahMap[s.surah] ?? s.surah : s.surah}</div>
        <div>${s.from ?? ""} - ${s.to ?? ""}</div>
        <div>${s.notes ?? "-"}</div>
      </div>
    `
      )
      .join("")}

  </div>

  <!-- FOOTER -->
  <div class="footer">
    جزاكم الله خيرًا وجعلكم من أهل القرآن
  </div>

</div>

</body>
</html>
`;
}