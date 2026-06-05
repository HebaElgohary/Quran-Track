// hooks/useGroups.ts

import { useEffect, useState } from "react";
import {
  getGroups,
  addGroup,
  updateGroup,
  deleteGroup,
} from "@/storage/groupsStorage";

import { Group, Student } from "@/types/appTypes";

export default function useGroups() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(false);

  // =========================
  // LOAD GROUPS
  // =========================
  const loadGroups = async () => {
    try {
      setLoading(true);

      const data = await getGroups();

      setGroups(data);
      return data;
    } catch (error) {
      console.log("Error loading groups", error);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // ADD GROUP
  // =========================
  const createGroup = async (
    groupData: Omit<Group, "id">,
    students?: Student[]
  
  ) => {
    console.log('inside create group ',students)
    try {
     const group = await addGroup(groupData, students);
      setGroups((prev) => [...prev, { ...group }]);
      await loadGroups();
    } catch (error) {
      console.log("Error creating group", error);
    }
  };

  // =========================
  // UPDATE GROUP
  // =========================
  const editGroup = async (updatedGroup: Group) => {
    try {
      await updateGroup(updatedGroup);

      await loadGroups();
    } catch (error) {
      console.log("Error updating group", error);
    }
  };

  // =========================
  // DELETE GROUP
  // =========================
  const removeGroup = async (groupId: number) => {
    try {
      await deleteGroup(groupId);

      await loadGroups();
    } catch (error) {
      console.log("Error deleting group", error);
    }
  };

  // =========================
  // FIRST LOAD
  // =========================
  useEffect(() => {
    loadGroups();
  }, []);

  return {
    groups,
    loading,
    loadGroups,
    createGroup,
    editGroup,
    removeGroup,
  };
}
