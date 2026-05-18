import { useEffect, useState } from "react";
import { getStudents, addStudent } from "../storage/studentsStorage";
import { Student } from "@/types/appTypes";

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);

  // LOAD Students
  // =========================
  const loadStudents = async () => {
    try {
      setLoading(true);

      const data = await getStudents();

      setStudents(data);
    } catch (error) {
      console.log("Error loading groups", error);
    } finally {
      setLoading(false);
    }
  };

    // ADD Student
    // =========================
    const createStudent = async (
      groupData: Omit<Student, "id">
    ) => {
      try {
        await addStudent(groupData);
  
        await loadStudents();
      } catch (error) {
        console.log("Error creating group", error);
      }
    };

  const deleteStudent = async (id: string) => {
    const updated = students.filter(
      (student) => student.id !== id
    );

    setStudents(updated);
    await addStudents(updated);
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