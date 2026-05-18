import { useEffect, useState } from "react";
import { getStudents, addStudent , updateStudent, deleteStudent} from "../storage/studentsStorage";
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
      studentData: Omit<Student, "id">
    ) => {
      try {
        await addStudent(studentData);
  
        await loadStudents();
      } catch (error) {
        console.log("Error creating group", error);
      }
    };


    
      // =========================
      // UPDATE STUDENT
      // =========================
      const editStudent = async (updatedStudent: Student) => {
        try {
          await updateStudent(updatedStudent);
    
          await loadStudents();
        } catch (error) {
          console.log("Error updating group", error);
        }
      };


  // =========================
  // DELETE STUDENT
  // =========================
  const removeStudent = async (studentId: number) => {
    try {
      await deleteStudent(studentId);

      await loadStudents();
    } catch (error) {
      console.log("Error deleting group", error);
    }
  };

  // =========================
  // FIRST LOAD
  // =========================
  useEffect(() => {
    loadStudents();
  }, []);

  return {
    students,
    loading,

    loadStudents,
    editStudent,
    removeStudent,

    createStudent,
 
  };
}
