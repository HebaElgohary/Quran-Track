export const getLevelColor = (level: string) => {
  switch (level) {
    case "مبتدئ":
      return {
        backgroundColor: "#DBEAFE",
        borderColor: "#93C5FD",
        color: "#1D4ED8",
      };

    case "متوسط":
      return {
        backgroundColor: "#FEF3C7",
        borderColor: "#FCD34D",
        color: "#92400E",
      };

    case "متقدم":
      return {
        backgroundColor: "#DCFCE7",
        borderColor: "#86EFAC",
        color: "#166534",
      };

    default:
      return {
        backgroundColor: "#F1F5F9",
        borderColor: "#CBD5E1",
        color: "#475569",
      };
  }
};