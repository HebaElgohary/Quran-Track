export const getGroupGradient = (color: string) => {
  const map: Record<string, [string, string]> = {
    primary: ["#6366F1", "#A5B4FC"],
    secondary: ["#EC4899", "#F9A8D4"],
    warning: ["#F59E0B", "#FCD34D"],
    danger: ["#EF4444", "#FCA5A5"],
  };

  return map[color] || ["#6366F1", "#A5B4FC"];
};