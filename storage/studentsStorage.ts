import { Student } from "@/types/appTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "students";

//------- get Students -------//
export const getStudents = async () => {
  try {
    const data = await AsyncStorage.getItem(KEY);

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Error getting groups", error);
    return [];
  }
};
//------- add Student -------//
export const addStudent = async (newStudent: Omit<Student, "id">) => {
  try {
    // old groups
    const oldStudents = await getStudents();

    // create group
    const student: Student = {
      id: Date.now(),
      ...newStudent,
    };

    // updated array
    const updatedStudents = [...oldStudents, student];

    // save
    await AsyncStorage.setItem(KEY, JSON.stringify(updatedStudents));

    return updatedStudents;
  } catch (error) {
    console.log("Error adding group", error);
  }
};

//------- delete Student -------//
export const deleteStudent = async (id: number) => {
  try {
    const data = await getStudents();
    const updated = data.filter((student: Student) => student.id !== id);
    await AsyncStorage.setItem(KEY, JSON.stringify(updated));
  } catch (error) {
    console.log("Error deleting group", error);
  }
};

//----------- update Student -------//
export const updateStudent = async (newData: Student) => {
  try {
    const data = await getStudents();
    const updated = data.map((student: Student) =>
      student.id === newData.id ? { ...student, ...newData } : student,
    );
    await AsyncStorage.setItem(KEY, JSON.stringify(updated));
  } catch (error) {
    console.log("Error updating group", error);
  }
};

//------ assign students to group -------//
export const assignStudentsToGroup = async (
  studentIds: number[],
  groupId: number,
) => {
  const students = await getStudents();
  console.log("studentIds", studentIds);
  console.log("groupId", groupId);
  const updated = students.map((student: Student) =>
    studentIds.includes(student.id) ? { ...student, groupId } : student,
  );

  await AsyncStorage.setItem(KEY, JSON.stringify(updated));

  return updated;
};
//------ remove students from group -------//
export const removeStudentsFromGroup = async (groupId: number) => {
  try {
    const students = await getStudents();

    const updatedStudents = students.map((student: Student) =>
      student.groupId === groupId
        ? { ...student, groupId: undefined }
        : student,
    );

    await AsyncStorage.setItem(KEY, JSON.stringify(updatedStudents));
  } catch (error) {
    console.log("Error removing students from group", error);
    throw error;
  }
};

// --------- get group students ----------//
export const getStudentsByGroupId = async (
  groupId: number,
): Promise<Student[]> => {
  try {
    const students = await getStudents();

    return students.filter((student: Student) => student.groupId === groupId);
  } catch (error) {
    console.log("Error getting group students", error);
    return [];
  }
};
// ---------------------------------------//
