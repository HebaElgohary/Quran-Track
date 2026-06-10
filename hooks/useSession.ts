import { addSession, deleteSession, getSessions } from "@/storage/sessionStorage";
import { Session, SessionFormData } from "@/types/appTypes";
import { use, useEffect, useState } from "react";

export const useSession = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(false);


  // =========================
  // LOAD SESSIONS
  // =========================
  const loadSessions = async () => {
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
    console.log("formdata createSession", formData);
    const { studentId, ...rest } = formData;
    console.log('student id in createStudent',studentId)
    try {
    await addSession(formData);
    await loadSessions();
    } catch (error) {
      console.log("Error creating group", error);
    }
  };

  
  // =========================
  // DELETE SESSION
  // =========================
  const removeSession = async (studentId: number) => {
    try {
      await deleteSession(studentId);

      await loadSessions();
    } catch (error) {
      console.log("Error deleting group", error);
    }
  };

    useEffect(() => {
    loadSessions();
  }, []);
  return { createSession, loadSessions, sessions, loading,removeSession };
};
