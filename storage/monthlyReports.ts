import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "monthlyReport";

// =========================
// GET ALL MonthlyReports
// =========================
export const getMonthlyReport = async () => {
    try {
        const data = await AsyncStorage.getItem(KEY);

        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.log("Error getting groups", error);
        return null;
    }
};