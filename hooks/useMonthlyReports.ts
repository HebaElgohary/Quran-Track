import { MonthlyReports, MonthlyReportsFormData } from "@/types/appTypes";
import { useEffect, useState } from "react";
import { addMonthlyReport, getMonthlyReports } from "../storage/monthlyReportsStorage";
export const useMonthlyReports=()=>{
  const [monthlyReports, setMonthlyReports] = useState<MonthlyReports[]>([]);
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<MonthlyReportsFormData>();



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
     const report = await addMonthlyReport(formData);
     setReport(formData);
      await loadMonthlyReports();
      return report;
      } catch (error) {
        console.log("Error creating group", error);
      }
    }
        useEffect(() => {
        loadMonthlyReports();
      }, []);

return {monthlyReports,report,loading,loadMonthlyReports,createMonthlyReport}
}