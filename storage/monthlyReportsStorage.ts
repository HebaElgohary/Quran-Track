import { MonthlyReports, MonthlyReportsFormData } from "@/types/appTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "monthlyReport";

// =========================
// GET ALL MonthlyReports
// =========================
export const getMonthlyReport: () => Promise<MonthlyReports[]> = async () => {
  try {
    const data = await AsyncStorage.getItem(KEY);

    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.log("Error getting groups", error);
    return null;
  }
};

export const addMonthlyReport : ( monthlyReport: MonthlyReportsFormData) => Promise<MonthlyReports> = async (monthlyReport) => {
  console.log("formData inside addmonthlyreport storage", monthlyReport);
  try {
    const oldMonthlyReport = await getMonthlyReport();
    const report: MonthlyReports = {
      id: Date.now(),
      ...monthlyReport,
    };
    const updatedSchedules = [...oldMonthlyReport, report];

    await AsyncStorage.setItem(KEY, JSON.stringify(updatedSchedules));
    return report;
  } catch (error) {
    console.log("Error adding monthlyReport", error);
    throw error;
  }
};
