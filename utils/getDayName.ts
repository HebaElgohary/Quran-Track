export const getDayName = (dateString: string) => {
  const days = [
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];

  const date = new Date(dateString);
  return days[date.getDay()];
};