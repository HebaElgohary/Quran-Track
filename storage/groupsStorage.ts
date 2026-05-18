import { Group } from "@/types/appTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';

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

// ADD GROUP
export const addGroup = async (newGroup: Omit<Group, "id">) => {
  try {
    // old groups
    const oldGroups = await getGroups();

    // create group
    const group: Group = {
      id: Date.now(),
      ...newGroup,
    };

    // updated array
    const updatedGroups = [...oldGroups, group];

    // save
    await AsyncStorage.setItem(GROUPS_KEY, JSON.stringify(updatedGroups));

    return updatedGroups;
  } catch (error) {
    console.log("Error adding group", error);
  }

};

// update GROUP
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
  }
};
