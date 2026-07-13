import { MonthlyReportsFormData, Session } from "@/types/appTypes";
import { formatDate } from "./formatDate";
import { getMonthYear } from "@/utils/getMonthYear ";
import { surahMap } from "@/translations/surahMap";
import { gradeMap } from "@/translations/sessionTranslation";
import { toEnglishDigits } from "./toEnglishDigits";

export function buildMonthlyReportHtml(
  report: MonthlyReportsFormData,
  studentName: string,
  teacherName: string,
  sessions: Session[],
  lang: "ar" | "en"
) {
  const isEn = lang === "en";



  const firstSession = sessions[0];

  const uniqueSurahs = [...new Set(sessions.map((s) => s.surah))];

  const uniqueGrades = [...new Set(sessions.map((s) => s.grade))];

  const uniqueTajweed = [
    ...new Set(
      sessions
        .map((s) =>
          isEn ? s.tajweedEn ?? s.tajweed : s.tajweed
        )
        .filter(Boolean)
    ),
  ];

const versesCount = sessions.reduce((sum, s) => {
  const from = Number(toEnglishDigits(s.from));
  const to = Number(toEnglishDigits(s.to));

  return sum + (to - from + 1);
}, 0);

  const t = {
    report: isEn ? "Monthly Quran Report" : "التقرير الشهري",
    subject: isEn ? "The Holy Quran" : "القرآن الكريم",
    teacher: isEn ? "Teacher" : "المعلم",
    student: isEn ? "Student" : "الطالب",
    sessions: isEn ? "Sessions" : "الحصص",
    surahs: isEn ? "Surahs" : "السور",
    verses: isEn ? "Verses" : "الآيات",
    grades: isEn ? "Grades" : "التقييمات",
    tajweed: isEn ? "Tajweed" : "التجويد",
    notes: isEn ? "Notes" : "الملاحظات",
    date: isEn ? "Date" : "التاريخ",
    footer: isEn
      ? "May Allah reward you abundantly and make you among the people of the Qur'an."
      : "جزاكم الله خيرًا وجعلكم من أهل القرآن",
  };

  return `
<!DOCTYPE html>
<html lang="${lang}" dir="${isEn ? "ltr" : "rtl"}">

<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1"/>

<title>${t.report}</title>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family:Arial,sans-serif;
  background:#fff;
  color:#111827;
  padding:14px;
  line-height:1.5;
}

.container{
  width:100%;
  background:#fff;
}

.header{
  text-align:center;
  margin-bottom:12px;
}

.reportLabel{
  font-size:14px;
  color:#4F46E5;
  font-weight:700;
}

.title{
  font-size:28px;
  font-weight:700;
  margin-top:4px;
}

.subtitle{
  font-size:13px;
  color:#F59E0B;
  font-weight:600;
  margin-top:4px;
}

.hr{
  width:90%;
  height:1px;
  background:#E5E7EB;
  margin:16px auto;
}

.infoCard{
  display:flex;
  justify-content:space-between;
  gap:20px;
  background:#F9FAFB;
  border-radius:12px;
  padding:12px;
  margin:10px 0;
}

.infoBox{
  flex:1;
}

.label{
  font-size:14px;
  font-weight:600;
  margin-bottom:4px;
  color:#111827;
}

.value{
  font-size:14px;
  color:#4B5563;
}

.stats{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:10px;
  margin-top:10px;
}

.statCard{
  border:1px solid #E5E7EB;
  border-radius:12px;
  padding:12px;
  text-align:center;
  background:#fff;
}

.statValue{
  font-size:20px;
  font-weight:700;
  color:#4F46E5;
}

.statLabel{
  margin-top:4px;
  font-size:12px;
  color:#6B7280;
}

.section{
  margin-top:14px;
}

.sectionTitle{
  font-size:14px;
  font-weight:600;
  margin-bottom:8px;
}

.tags{
  display:flex;
  flex-wrap:wrap;
  gap:6px;
}

.tag{
  background:#F3F4F6;
  padding:6px 10px;
  border-radius:8px;
  font-size:12px;
}

.table{
  margin-top:16px;
  border:1px solid #E5E7EB;
  border-radius:10px;
  overflow:hidden;
}

.row{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  border-bottom:1px solid #E5E7EB;
}

.row:last-child{
  border-bottom:none;
}

.headerRow{
  background:#F3F4F6;
  font-weight:700;
}

.row > div{
  padding:8px;
  font-size:11px;
  text-align:center;
  color:#374151;
  display:flex;
  justify-content:center;
  align-items:center;
}

.headerRow > div{
  color:#111827;
  font-weight:700;
}

.footer{
  margin-top:20px;
  text-align:center;
}

.footer .hr{
  margin-bottom:6px;
}

.footer{
  font-size:12px;
  color:#6B7280;
}

@media print{

  body{
    padding:14px;
    background:#fff;
  }

  .container{
    width:100%;
  }

}
</style>

</head>

<body>

<div class="container">

<div class="header">

<div class="reportLabel">
${t.report}
</div>

<div class="title">
${t.subject}
</div>

<div class="subtitle">
${firstSession?.dateTime ? getMonthYear(firstSession.dateTime, lang) : ""}
</div>

</div>

<div class="hr"></div>
<!-- INFO CARD -->
<div class="infoCard">

  <div class="infoBox">
    <div class="label">${t.teacher}</div>
    <div class="value">
      ${teacherName ?? ""}
    </div>
  </div>

  <div class="infoBox">
    <div class="label">${t.student}</div>
    <div class="value">
      ${studentName ?? ""}
    </div>
  </div>

</div>

<!-- STATS -->

<div class="stats">

  <div class="statCard">
    <div class="statValue">
      ${sessions.length}
    </div>
    <div class="statLabel">
      ${t.sessions}
    </div>
  </div>

  <div class="statCard">
    <div class="statValue">
      ${uniqueSurahs.length}
    </div>
    <div class="statLabel">
      ${t.surahs}
    </div>
  </div>

  <div class="statCard">
    <div class="statValue">
      ${versesCount}
    </div>
    <div class="statLabel">
      ${t.verses}
    </div>
  </div>

  <div class="statCard">
    <div class="statValue">
      ${uniqueGrades.length}
    </div>
    <div class="statLabel">
      ${t.grades}
    </div>
  </div>

</div>

<!-- SURAHS -->

<div class="section">

  <div class="sectionTitle">
    ${t.surahs}
  </div>

  <div class="tags">

    ${uniqueSurahs
      .map(
        (surah) => `
        <div class="tag">
          ${
            isEn
              ? surahMap[surah] ?? surah
              : surah
          }
        </div>
      `
      )
      .join("")}

  </div>

</div>

<!-- TAJWEED -->

<div class="section">

  <div class="sectionTitle">
    ${t.tajweed}
  </div>

  <div class="tags">

    ${
      uniqueTajweed.length
        ? uniqueTajweed
            .map(
              (tajweed) => `
              <div class="tag">
                ${tajweed}
              </div>
            `
            )
            .join("")
        : `<div class="tag">-</div>`
    }

  </div>

</div>

<!-- GRADES -->

<div class="section">

  <div class="sectionTitle">
    ${t.grades}
  </div>

  <div class="tags">

    ${
      uniqueGrades.length
        ? uniqueGrades
            .map(
              (grade) => `
              <div class="tag">
                ${
                  isEn
                    ? gradeMap[grade] ?? grade
                    : grade
                }
              </div>
            `
            )
            .join("")
        : `<div class="tag">-</div>`
    }

  </div>

</div>

<!-- SESSIONS TABLE -->

<div class="table">

  <div class="row headerRow">

    <div>
      ${t.date}
    </div>

    <div>
      ${t.surahs}
    </div>

    <div>
      ${t.verses}
    </div>

    <div>
      ${t.notes}
    </div>

  </div>
    ${sessions
    .map(
      (session) => `
      <div class="row">

        <div>
          ${formatDate(session.dateTime, lang)}
        </div>

        <div>
          ${
            isEn
              ? surahMap[session.surah] ?? session.surah
              : session.surah
          }
        </div>

        <div>
              ${
            isEn
                        ? `${toEnglishDigits(String(session.from))} - ${toEnglishDigits(
                            String(session.to),
                          )}`
                        : `${session.from} - ${session.to}`}
          
        </div>

        <div>
          ${
            isEn
              ? session.notesEn ?? session.notes ?? "-"
              : session.notes ?? "-"
          }
        </div>

      </div>
    `
    )
    .join("")}

</div>

<!-- FOOTER -->

<div class="footer">

  <div class="hr"></div>

  <div>
    ${t.footer}
  </div>

</div>

</div>

</body>

</html>
`;
}