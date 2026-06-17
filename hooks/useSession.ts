import {
  addSession,
  deleteSession,
  getSessions,
  updateSession,
} from "@/storage/sessionStorage";
import { Session, SessionFormData } from "@/types/appTypes";
import { useEffect, useState } from "react";

export const useSession = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(false);

  // =========================
  // LOAD
  // =========================
  const loadSessions = async () => {
    try {
      setLoading(true);
      const data = await getSessions();
      setSessions(data || []);
    } catch (error) {
      console.log("Error loading sessions", error);
      setSessions([]);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // CREATE
  // =========================
  const createSession = async (formData: SessionFormData) => {
    try {
      await addSession(formData);
      await loadSessions(); // refresh
    } catch (error) {
      console.log("Error creating session", error);
    }
  };

  // =========================
  // UPDATE
  // =========================
  const editSession = async (updated: Session) => {
    try {
      await updateSession(updated);
      await loadSessions(); // 
    } catch (error) {
      console.log("Error updating session", error);
    }
  };

  // =========================
  // DELETE
  // =========================
  const removeSession = async (id: number) => {
    try {
      await deleteSession(id);
      await loadSessions(); // 
    } catch (error) {
      console.log("Error deleting session", error);
    }
  };

  // =========================
  // INIT
  // =========================
  useEffect(() => {
    loadSessions();
  }, []);

  return {
    sessions,
    loading,
    createSession,
    editSession,
    removeSession,
    loadSessions,
  };
};