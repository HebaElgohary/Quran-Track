import { Group, Student } from "@/types/appTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { assignStudentsToGroup } from "./studentsStorage";

const GROUPS_KEY = "groups";

// GET ALL GROUPS
export const getGroups = async (): Promise<Group[]> => {
  try {
    const data = await AsyncStorage.getItem(GROUPS_KEY);

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Error getting groups", error);
    return [];
  }
};

//-------- ADD GROUP --------//
export const addGroup = async (newGroup: Omit<Group, "id">,students?: Student[]): Promise<Group> => {
  try {
    // old groups
    const oldGroups = await getGroups();

    // create group
    const group: Group = {
      id: Date.now(),
      ...newGroup,
    };

    const updatedGroups = [...oldGroups, group];

    // save group
    await AsyncStorage.setItem(GROUPS_KEY, JSON.stringify(updatedGroups));
  
  //add students to group if exist by add gropuID to each student then save students again with new groupId
    const studentsIds = students?.map((student) => student.id) || [];
     await assignStudentsToGroup(studentsIds, group.id);
    return  group;
  } catch (error) {
    console.log("Error adding group", error);
    throw error;
  }

};

//---------- update GROUP ----------//
export const updateGroup = async (updatedGroup: Group) => {
  try {
    // old groups
    const oldGroups = await getGroups();
    
    // updated array
    const updatedGroups = oldGroups.map((group) => {
      if (group.id === updatedGroup.id) {
        return updatedGroup;
      }
      return group;
    });

    // save
    await AsyncStorage.setItem(GROUPS_KEY, JSON.stringify(updatedGroups));

    return updatedGroups;
  } catch (error) {
    console.log("Error updating group", error);
      throw error;

  }
};

//---------- delete GROUP ----------//
export const deleteGroup = async (groupId: number) => {
  try {
    const oldGroups = await getGroups();
    const updatedGroups = oldGroups.filter((group) => group.id !== groupId);
    await AsyncStorage.setItem(GROUPS_KEY, JSON.stringify(updatedGroups));
  } catch (error) {
    console.log("Error deleting group", error);
  }
};
