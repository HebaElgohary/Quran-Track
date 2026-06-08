// hooks/useGroups.ts

import {
  addGroup,
  deleteGroup,
  getGroups,
  updateGroup,
} from "@/storage/groupsStorage";
import { useEffect, useState } from "react";

import { Group, Student } from "@/types/appTypes";
import { useStudents } from "./useStudent";

export default function useGroups() {
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(false);
  const { loadStudents, assignToGroup, removeFromGroup } = useStudents();

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
    students?: Student[],
  ) => {
    console.log("inside create group ", students);
    try {
      const group = await addGroup(groupData, students);
      setGroups((prev) => [...prev, { ...group }]);
      await loadGroups();
      await loadStudents();
    } catch (error) {
      console.log("Error creating group", error);
    }
  };

  // =========================
  // UPDATE GROUP
  // =========================
  const editGroup = async (updatedGroup: Group, students?: Student[]) => {
    await updateGroup(updatedGroup, students);

    if (students?.length) {
      await assignToGroup(
        students.map((s) => s.id),
        updatedGroup.id,
      );
    }

    await loadGroups();
  };

  // =========================
  // DELETE GROUP
  // =========================
  const removeGroup = async (groupId: number) => {
    try {
      await deleteGroup(groupId);

      await loadGroups();
      await loadStudents();
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
