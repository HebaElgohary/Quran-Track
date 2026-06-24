export const buildScheduleDate = (
  date: string,
  time: string,
  amPm: string
) => {
  const [hoursStr, minutesStr] =
    time.split(":");

  let hours = Number(hoursStr);

  if (amPm === "PM" && hours < 12) {
    hours += 12;
  }

  if (amPm === "AM" && hours === 12) {
    hours = 0;
  }

  const scheduleDate = new Date(date);

  scheduleDate.setHours(
    hours,
    Number(minutesStr),
    0,
    0
  );

  return scheduleDate;
};