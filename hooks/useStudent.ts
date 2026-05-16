import { useEffect, useState } from "react";
import { getStudents, saveStudents } from "../storage/studentsStorage";

export const useStudents = () => {
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const data = await getStudents();
    setStudents(data || []);
  };

  const addStudent = async (data: any) => {
    const newStudent = {
      id: Date.now().toString(),
      name: "طالب جديد",
      ...data,
    };

    
    setStudents((prev) => {
      const updated = [...prev, newStudent];
      saveStudents(updated);
      return updated;
    });
  };

  return {
    students,
    addStudent,
    reloadStudents: loadStudents,
  };
};