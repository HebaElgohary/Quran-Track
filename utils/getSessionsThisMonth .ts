import { Schedule } from "@/types/appTypes";

export const getSessionsThisMonth = (sessions: Schedule[]) => {
  const today = new Date();

  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const monthSessions = sessions.filter((s) => {
    const sessionDate = new Date(s.date);

    return (
      sessionDate.getMonth() === currentMonth &&
      sessionDate.getFullYear() === currentYear
    );
  });

  return monthSessions.length;
};