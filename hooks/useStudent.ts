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
      ...data,
    };

    const updated = [...students, newStudent];

    setStudents(updated);
    await saveStudents(updated);
  };

  const deleteStudent = async (id: string) => {
    const updated = students.filter(
      (student) => student.id !== id
    );

    setStudents(updated);
    await saveStudents(updated);
  };

  const updateStudent = async (
    id: string,
    newData: any
  ) => {
    const updated = students.map((student) =>
      student.id === id
        ? { ...student, ...newData }
        : student
    );

    setStudents(updated);
    await saveStudents(updated);
  };

  return {
    students,
    addStudent,
    deleteStudent,
    updateStudent,
    reloadStudents: loadStudents,
  };
};