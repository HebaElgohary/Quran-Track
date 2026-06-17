import { Schedule } from "@/types/appTypes";

export const getSessionsToday = (sessions: Schedule[]) => {
  const today = new Date();

  const todayStr =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");

  const todaySessions = sessions.filter((s) => {
    const d = new Date(s.date);

    const sessionStr =
      d.getFullYear() +
      "-" +
      String(d.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(d.getDate()).padStart(2, "0");

    return sessionStr === todayStr;
  });

  return todaySessions.length;
};