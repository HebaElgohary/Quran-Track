import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import CustomAlert from "@/components/atoms/CustomAlert";
import GroupCard from "@/components/molecules/GroupCard";
import Header from "@/components/organisms/Header";
import NoDataFallback from "@/components/organisms/NoDataFallback";

import Loading from "../../animations/Loading";

import useGroups from "@/hooks/useGroup";
import { useStudents } from "@/hooks/useStudent";
import { useToast } from "@/hooks/useToast";

import { Group, GroupFormData } from "@/types/appTypes";
import { colors } from "@/constants/theme";

type AddGroupType = GroupFormData;

export default function Groups() {
  const {
    groups,
    loading,
    createGroup,
    removeGroup,
    editGroup,
  } = useGroups();

  const {
    students,
    assignToGroup,
    removeFromGroup,
    loadStudents,
  } = useStudents();

  const { showSuccess } = useToast();

  const [selectedGroupId, setSelectedGroupId] =
    React.useState<number | null>(null);

  // -------------------------
  // Create Group
  // -------------------------

  const AddGroup = async (formData: AddGroupType) => {
    const { students, ...groupData } = formData;

    const group = await createGroup(groupData, students);

    await assignToGroup(
      students.map((s) => s.id),
      group?.id as number
    );

    await loadStudents();

    showSuccess("تم إضافة المجموعة بنجاح");
  };

  // -------------------------
  // Delete Group
  // -------------------------

  const confirmDelete = async () => {
    if (selectedGroupId === null) return;

    await removeGroup(selectedGroupId);

    showSuccess("تم حذف المجموعة");

    setSelectedGroupId(null);
  };

  // -------------------------
  // Update Group
  // -------------------------

  const updateGroup = async (updatedGroup: Group) => {
    const { students, ...groupData } = updatedGroup;

    const studentIds = students?.map((student) => student.id);

    try {
      await removeFromGroup(groupData.id);

      await assignToGroup(studentIds, groupData.id);

      await editGroup(updatedGroup, students);

      showSuccess("تم تحديث المجموعة");
    } catch (error) {
      console.log(error);
    }
  };

  // -------------------------

  return (
    <SafeAreaView style={styles.container}>
      <Header<AddGroupType>
        title="المجموعات"
        subtitle="قسم طلابك لمجموعات وشارك تقاريرهم الشهرية دفعة واحدة"
        btn="مجموعة جديدة"
        formName="Groups"
        handleSubmit={AddGroup}
      />

      {loading && <Loading />}

      {!loading && groups.length === 0 ? (
        <View style={styles.emptyContainer}>
          <NoDataFallback<AddGroupType>
            formName="Groups"
            text="لا توجد مجموعات مسجلة"
            btn="إضافة أول مجموعة"
            handleSubmit={AddGroup}
            Icon={() => (
              <Feather
                name="folder-minus"
                size={34}
                color="#94A3B8"
              />
            )}
          />
        </View>
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <GroupCard
              group={item}
              students={students}
              setSelectedGroupId={setSelectedGroupId}
              updateGroup={updateGroup}
            />
          )}
        />
      )}

      <CustomAlert
        show={selectedGroupId !== null}
        title="حذف المجموعة"
        message="هل أنت متأكد أنك تريد حذف هذه المجموعة؟"
        confirmText="حذف"
        cancelText="إلغاء"
        onCancel={() => setSelectedGroupId(null)}
        onConfirm={confirmDelete}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
            direction:'rtl'
    
  },

  listContent: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 40,
    gap: 16,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
});