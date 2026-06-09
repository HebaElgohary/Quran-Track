import { addSession, getSessions } from "@/storage/sessionStorage";
import { Session, SessionFormData } from "@/types/appTypes";
import { useState } from "react";

export const useSession=()=>{

    const [sessions, setSessions] = useState<Session[]>([]);
    const [loading, setLoading] = useState(false);
    // =========================
    // LOAD SESSIONS    
   // =========================
   const loadGroups = async () => {
     try {
       setLoading(true);
       const data = await getSessions();
       setSessions(data);
       return data;
     } catch (error) {
       console.log("Error loading groups", error);
     } finally {
       setLoading(false);
     }
   };
    const createSession = async (formData: SessionFormData) => {
console.log('formdata createSession',formData)
  const { student, ...rest } = formData;
  const studentId = student.id
  await addSession(rest, studentId); ;
    }
    return {createSession}
}