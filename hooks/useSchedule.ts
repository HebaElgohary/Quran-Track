import { addSchedule, deleteSchedule, getSchedules, updateSchedule } from "@/storage/scheduleStorage";
import { Schedule, ScheduleFormData } from "@/types/appTypes";
import { use, useEffect, useState } from "react";

export const useSchedule = () => {
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

  
  // =========================
  // CREATE Schedule 
  // =========================
   const createSchedule = async (formData: ScheduleFormData) => {
      console.log("formdata createSession", formData);
      const { studentId, ...rest } = formData;
      console.log('student id in createStudent',studentId)
      try {
      await addSchedule(formData);
      await loadSchedules();
      } catch (error) {
        console.log("Error creating group", error);
      }
    };

     // =========================
        // UPDATE Schedule
        // =========================
        const editSchedule = async (updatedSchedule: Schedule) => {
          try {
            await updateSchedule(updatedSchedule);
      
            await loadSchedules();
          } catch (error) {
            console.log("Error updating group", error);
          }
        };
    
          // =========================
          // DELETE Schedule
          // =========================
          const removeSchedule = async (scheduleId: number) => {
            try {
              await deleteSchedule(scheduleId);
        
              await loadSchedules();
            } catch (error) {
              console.log("Error deleting group", error);
            }
          };
          
    useEffect(() => {
    loadSchedules();
  }, []);
  

  return { schedules, loading, loadSchedules,createSchedule ,editSchedule,removeSchedule};
};
