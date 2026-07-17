// utils/getLevelColor.ts

export const getLevelColor = (level: string) => {
  switch (level) {
    case "مبتدئ":
      return {
        bg: "#FEF2F2",
        color: "#DC2626",
      };

    case "متوسط":
      return {
        bg: "#FFFBEB",
        color: "#D97706",
      };

    case "متقدم":
      return {
        bg: "#EFF6FF",
        color: "#2563EB",
      };

    case "حافظ":
      return {
        bg: "#ECFDF5",
        color: "#059669",
      };

    case "مجاز":
      return {
        bg: "#EEF2FF",
        color: "#4F46E5",
      };

    default:
      return {
        bg: "#F1F5F9",
        color: "#475569",
      };
  }
};