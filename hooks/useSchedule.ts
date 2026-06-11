import { getSchedules } from "@/storage/scheduleStorage";
import { Schedule } from "@/types/appTypes";
import { use, useEffect, useState } from "react";

export const useSession = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState(false);


  // =========================
  // LOAD Schedules
  // =========================
  const loadSchedules = async () => {
    try {
      setLoading(true);
      const data = await getSchedules();
      setSchedules(data);
      return data;
    } catch (error) {
      console.log("Error loading groups", error);
    } finally {
      setLoading(false);
    }
  };

  return { schedules, loading, loadSchedules };
};