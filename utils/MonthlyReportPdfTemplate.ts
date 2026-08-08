import { colors } from "@/constants/theme";
import { gradeMap } from "@/translations/sessionTranslation";
import { surahMap } from "@/translations/surahMap";
import { MonthlyReportsFormData, Session } from "@/types/appTypes";
import { getMonthYear } from "@/utils/getMonthYear ";
import { formatDate } from "./formatDate";
import { toEnglishDigits } from "./toEnglishDigits";

export function buildMonthlyReportHtml(
  report: MonthlyReportsFormData,
  studentName: string,
  teacherName: string,
  monthSessions: Session[],
  lang: "ar" | "en",
) {
  const isEn = lang === "en";

  const firstSession = monthSessions[0];

  // =========================
  // Unique Surahs
  // =========================
  const uniqueSurahs = [...new Set(monthSessions.flatMap((s) => s.surahs))];

  // =========================
  // Unique Grades
  // =========================
  const uniqueGrades = [...new Set(monthSessions.map((s) => s.grade))];

  // =========================
  // Unique Tajweed
  // =========================
  const uniqueTajweed = [
    ...new Set(
      monthSessions
        .map((s) => (isEn ? (s.tajweedEn ?? s.tajweed) : s.tajweed))
        .filter(Boolean),
    ),
  ];

  // =========================
  // Verses Count
  // =========================
  const versesCount = monthSessions.reduce((sum, s) => {
    const from = Number(toEnglishDigits(String(s.from)));
    const to = Number(toEnglishDigits(String(s.to)));

  if (
    Number.isNaN(from) ||
    Number.isNaN(to) ||
    (from === 0 && to === 0)
  ) {
    return sum;
  }
    if (Number.isNaN(from) || Number.isNaN(to)) {
      return sum;
    }

    return sum + Math.max(to - from + 1, 0);
  }, 0);

  // =========================
  // Translations
  // =========================
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

  // =========================
  // Surahs HTML
  // =========================
  const uniqueSurahsHtml = uniqueSurahs.length
    ? uniqueSurahs
        .map(
          (surah) => `
            <span class="tag">
              ${isEn ? (surahMap[surah] ?? surah) : surah}
            </span>
          `,
        )
        .join("")
    : `<span class="tag">-</span>`;

  // =========================
  // Tajweed HTML
  // =========================
  const uniqueTajweedHtml = uniqueTajweed.length
    ? uniqueTajweed
        .map(
          (tajweed) => `
            <span class="tag">
              ${tajweed}
            </span>
          `,
        )
        .join("")
    : `<span class="tag">-</span>`;

  // =========================
  // Grades HTML
  // =========================
  const uniqueGradesHtml = uniqueGrades.length
    ? uniqueGrades
        .map(
          (grade) => `
            <span class="tag">
              ${isEn ? (gradeMap[grade] ?? grade) : grade}
            </span>
          `,
        )
        .join("")
    : `<span class="tag">-</span>`;

  // =========================
  // Sessions Table
  // =========================
  const sessionsHtml = monthSessions
    .map(
      (session) => `
        <div class="table-row">

          <!-- Date -->
          <div class="table-cell">
            ${formatDate(session.dateTime, lang)}
          </div>

          <!-- Surahs -->
          <div class="table-cell surah-cell">
            ${
              session.surahs?.length
                ? session.surahs
                    .map(
                      (surah) => `
                        <span class="surah-tag">
                          ${isEn ? (surahMap[surah] ?? surah) : surah}
                        </span>
                      `,
                    )
                    .join("")
                : "-"
            }
          </div>

          <!-- Verses -->
          <div class="table-cell">
            ${
              isEn
                ? `${toEnglishDigits(String(session.from))} - ${toEnglishDigits(
                    String(session.to),
                  )}`
                : `${session.from} - ${session.to}`
            }
          </div>

          <!-- Notes -->
          <div class="table-cell">
            ${
              isEn
                ? (session.notesEn ?? session.notes ?? "-")
                : (session.notes ?? "-")
            }
          </div>

        </div>
      `,
    )
    .join("");

  // =========================
  // HTML
  // =========================
  return `
    <!DOCTYPE html>
    <html lang="${lang}" dir="${isEn ? "ltr" : "rtl"}">

    <head>
      <meta charset="UTF-8" />

      <style>

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 20px;
          font-family: Arial, sans-serif;
          background: #ffffff;
          color: #111827;
        }

        .container {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
        }

        /* =========================
           Header
        ========================= */

        .header {
          text-align: center;
          margin-bottom: 20px;
        }

        .report-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .subject {
          font-size: 16px;
          color: #6b7280;
        }

        .month {
          margin-top: 8px;
          font-size: 14px;
          color: #6b7280;
        }

        /* =========================
           Horizontal Line
        ========================= */

        .hr {
          width: 90%;
          height: 1px;
          background-color: #d1d5db;
          margin: 15px auto;
        }

        /* =========================
           Teacher / Student
        ========================= */

        .info-card {
          display: flex;
          flex-direction: ${isEn ? "row" : "row-reverse"};
          justify-content: space-between;
          gap: 20px;
          padding: 15px;
          margin-bottom: 20px;
        }

        .info-column {
          flex: 1;
          text-align: center;
        }

        .label {
          font-size: 13px;
          font-weight: bold;
          color: #6b7280;
          margin-bottom: 5px;
        }

        .value {
          font-size: 15px;
          font-weight: 600;
        }

        /* =========================
           Stats
        ========================= */

 .stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 25px;
}

.stat-card {
  padding: 12px;
  text-align: center;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}

        .stat-label {
          font-size: 12px;
          color: #6b7280;
          margin-bottom: 5px;
        }

        .stat-value {
          font-size: 18px;
          font-weight: bold;
        }

        /* =========================
           Sections
        ========================= */

        .section {
          margin-bottom: 20px;
        }

        .section-title {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tag {
          display: inline-block;
          background-color: ${colors.gray};
          border-radius: 10px;
          padding: 5px 10px;
          font-size: 12px;
          margin: 2px;
        }

        /* =========================
           Table
        ========================= */

        .table-container {
          width: 100%;
          margin-top: 25px;
          border: 1px solid #d1d5db;
        }

        .table-row {
          display: flex;
          width: 100%;
        }

        .table-cell {
          flex: 1;
          min-height: 45px;
          padding: 8px;
          border-right: 1px solid #d1d5db;
          border-bottom: 1px solid #d1d5db;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;
          font-size: 12px;
        }

        .table-row:last-child .table-cell {
          border-bottom: none;
        }

        .table-cell:last-child {
          border-right: none;
        }

        .table-header {
          font-weight: bold;
          background-color: #f3f4f6;
        }

        .surah-cell {
          flex-wrap: wrap;
          gap: 3px;
        }

        .surah-tag {
          display: inline-block;
          background-color: ${colors.gray};
          border-radius: 10px;
          padding: 4px 8px;
          margin: 2px;
          font-size: 11px;
        }

        /* =========================
           Footer
        ========================= */

        .footer {
          margin-top: 25px;
          text-align: center;
          font-size: 12px;
          color: #6b7280;
        }

        .footer .hr {
          margin-bottom: 8px;
        }

        /* =========================
           Print
        ========================= */

        @media print {
          body {
            padding: 14px;
            background: #ffffff;
          }

          .container {
            width: 100%;
          }
        }

      </style>
    </head>

    <body>

      <div class="container">

        <!-- =========================
             Header
        ========================= -->

        <div class="header">

          <div class="report-title">
            ${t.report}
          </div>

          <div class="subject">
            ${t.subject}
          </div>

          <div class="month">
            ${
              firstSession?.dateTime
                ? getMonthYear(firstSession.dateTime, isEn ? "en" : "ar")
                : ""
            }
          </div>

        </div>

        <div class="hr"></div>

        <!-- =========================
             Teacher / Student
        ========================= -->

        <div class="info-card">

          <div class="info-column">
            <div class="label">
              ${t.teacher}
            </div>

            <div class="value">
              ${teacherName}
            </div>
          </div>

          <div class="info-column">
            <div class="label">
              ${t.student}
            </div>

            <div class="value">
              ${studentName}
            </div>
          </div>

        </div>

        <!-- =========================
             Stats
        ========================= -->

        <div class="stats-grid">

          <div class="stat-card">
            <div class="stat-label">
              ${t.sessions}
            </div>

            <div class="stat-value">
              ${monthSessions.length}
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-label">
              ${t.grades}
            </div>

            <div class="stat-value">
              ${uniqueGrades.length}
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-label">
              ${t.surahs}
            </div>

            <div class="stat-value">
              ${uniqueSurahs.length}
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-label">
              ${t.verses}
            </div>

            <div class="stat-value">
              ${versesCount}
            </div>
          </div>

        </div>

        <!-- =========================
             Surahs
        ========================= -->

        <div class="section">

          <div class="section-title">
            ${t.surahs}
          </div>

          <div class="tags">
            ${uniqueSurahsHtml}
          </div>

        </div>

        <!-- =========================
             Tajweed
        ========================= -->

        <div class="section">

          <div class="section-title">
            ${t.tajweed}
          </div>

          <div class="tags">
            ${uniqueTajweedHtml}
          </div>

        </div>

        <!-- =========================
             Grades
        ========================= -->

        <div class="section">

          <div class="section-title">
            ${t.grades}
          </div>

          <div class="tags">
            ${uniqueGradesHtml}
          </div>

        </div>

        <!-- =========================
             Sessions Table
        ========================= -->

        <div class="table-container">

          <div class="table-row table-header">

            <div class="table-cell">
              ${t.date}
            </div>

            <div class="table-cell">
              ${t.surahs}
            </div>

            <div class="table-cell">
              ${t.verses}
            </div>

            <div class="table-cell">
              ${t.notes}
            </div>

          </div>

          ${sessionsHtml}

        </div>

        <!-- =========================
             Footer
        ========================= -->

        <div class="footer">

          <div class="hr"></div>

          ${t.footer}

        </div>

      </div>

    </body>

    </html>
  `;
}
