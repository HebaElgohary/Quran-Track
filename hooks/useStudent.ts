import { Student } from "@/types/appTypes";
import { useEffect, useState } from "react";
import {
  addStudent,
  assignStudentsToGroup,
  deleteStudent,
  getStudents,
  removeStudentsFromGroup,
  updateStudent,
} from "../storage/studentsStorage";

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
  const createStudent = async (studentData: Omit<Student, "id">) => {
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
  //  ------------assignToGroup ------------//
  const assignToGroup = async (studentIds: number[], groupId: number) => {
   console.log('students inside assignToGroup', studentIds);
    try {
      await assignStudentsToGroup(studentIds, groupId);
      await loadStudents(); //
    } catch (error) {
      console.log("Error assigning students to group", error);
    }
  };
  //------------------------------------//
  // ------------removeFromGroup ------------//
  const removeFromGroup = async (groupId: number) => {
    try {
      await removeStudentsFromGroup(groupId);
      await loadStudents();
    } catch (error) {
      console.log("Error removing students from group", error);
    }
  };
  //----------------------------//
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
    removeFromGroup,
    loadStudents,
    editStudent,
    removeStudent,
    assignToGroup,
    createStudent,
  };
};
