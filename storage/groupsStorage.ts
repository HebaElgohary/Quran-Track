import { Group, Student } from "@/types/appTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { assignStudentsToGroup, removeStudentsFromGroup } from "./studentsStorage";

const GROUPS_KEY = "groups";

// =========================
// GET ALL GROUPS
// =========================
export const getGroups = async (): Promise<Group[]> => {
  try {
    const data = await AsyncStorage.getItem(GROUPS_KEY);

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Error getting groups", error);
    return [];
  }
};

// =========================
// ADD GROUP
// =========================
export const addGroup = async (
  newGroup: Omit<Group, "id">,
  students?: Student[]
): Promise<Group> => {
  try {
    const oldGroups = await getGroups();

    const group: Group = {
      id: Date.now(),
      ...newGroup,
    };

    const updatedGroups = [...oldGroups, group];

    await AsyncStorage.setItem(
      GROUPS_KEY,
      JSON.stringify(updatedGroups)
    );

    const studentIds =
      students?.map((student) => student.id) ?? [];

    if (studentIds.length > 0) {
      await assignStudentsToGroup(studentIds, group.id);
    }

    return group;
  } catch (error) {
    console.log("Error adding group", error);
    throw error;
  }
};

// =========================
// UPDATE GROUP
// =========================
export const updateGroup = async (
  updatedGroup: Group,
  students?: Student[]
): Promise<Group[]> => {
  try {
    const oldGroups = await getGroups();

    const updatedGroups = oldGroups.map((group) =>
      group.id === updatedGroup.id
        ? updatedGroup
        : group
    );

    await AsyncStorage.setItem(
      GROUPS_KEY,
      JSON.stringify(updatedGroups)
    );

    const studentIds =
      students?.map((student) => student.id) ?? [];

    if (studentIds.length > 0) {
  await removeStudentsFromGroup(
  updatedGroup.id
);

await assignStudentsToGroup(
  studentIds,
  updatedGroup.id
);
    }

    return updatedGroups;
  } catch (error) {
    console.log("Error updating group", error);
    throw error;
  }
};

// =========================
// DELETE GROUP
// =========================
export const deleteGroup = async (
  groupId: number
): Promise<void> => {
  try {
    const oldGroups = await getGroups();

    const updatedGroups = oldGroups.filter(
      (group) => group.id !== groupId
    );

    await AsyncStorage.setItem(
      GROUPS_KEY,
      JSON.stringify(updatedGroups)
    );

    await removeStudentsFromGroup(groupId);
  } catch (error) {
    console.log("Error deleting group", error);
    throw error;
  }
};