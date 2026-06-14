import { MonthlyReports, MonthlyReportsFormData } from "@/types/appTypes";
import { useState } from "react";
import { addMonthlyReport, getMonthlyReports } from "../storage/monthlyReportsStorage";
export const useMonthlyReports=()=>{
  const [monthlyReports, setMonthlyReports] = useState<MonthlyReports[]>([]);
  const [loading, setLoading] = useState(false);


  // =========================
  // LOAD MonthlyReports
  // =========================
  const loadMonthlyReports = async () => {
    try {
      setLoading(true);
      const data = await getMonthlyReports();
      setMonthlyReports(data);
      return data;
    } catch (error) {
      console.log("Error loading groups", error);
    } finally {
      setLoading(false);
    }
  };
  // =========================
    // createMonthlyReport 
    // =========================
    const createMonthlyReport = async (formData: MonthlyReportsFormData) => {
      console.log("formdata createSession", formData);
      const { studentId, ...rest } = formData;
      console.log('student id in createStudent',studentId)
      try {
      await addMonthlyReport(formData);
      await loadMonthlyReports();
      } catch (error) {
        console.log("Error creating group", error);
      }
    }

return {monthlyReports,loading,loadMonthlyReports,createMonthlyReport}
}