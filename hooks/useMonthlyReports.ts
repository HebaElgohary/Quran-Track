import { MonthlyReports } from "@/types/appTypes";
import { useState } from "react";

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


}