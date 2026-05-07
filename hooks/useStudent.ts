import { useEffect, useState } from "react";
import { getStudents, saveStudents } from "../storage/studentsStorage";

export const useStudents = () => {
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const addStudent = async (data: any) => {
    const newStudent = {
      id: Date.now().toString(),
      name: "طالب جديد"
    };
    Object.assign(newStudent, data);

    const updated = [...students, newStudent];
    setStudents(updated);
    await saveStudents(updated);
  };

  return { students, addStudent };
};