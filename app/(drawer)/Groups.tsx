import CustomAlert from "@/components/atoms/CustomAlert";
import GroupCard from "@/components/molecules/GroupCard";
import Header from "@/components/organisms/Header";
import NoDataFallback from "@/components/organisms/NoDataFallback";
import useGroups from "@/hooks/useGroup";
import { useStudents } from "@/hooks/useStudent";
import { useToast } from "@/hooks/useToast";
import { Group, GroupFormData } from "@/types/appTypes";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
type addGroupType = GroupFormData;
type editGroupType = Group;

export default function Groups() {
  //calling hooks
  const { groups, loading, createGroup, removeGroup, editGroup } = useGroups();
  const { showSuccess } = useToast();
  const { students,assignToGroup } = useStudents();
  const [selectedGroupId, setSelectedGroupId] = React.useState<number | null>(
    null,
  );
  //------------------------------//

  console.log("num of grouooopppps;", groups);
  const AddGroup: (formData: addGroupType) => Promise<void> = async (
    formData: addGroupType,
  ) => {
    console.log("inside addGroup");
    console.log("group data areeeeeee", formData);
    const { students, ...groupData } = formData;
    console.log("students before send to creategroup", students);
    await createGroup(groupData, students);
    showSuccess("تم إضافة المجموعة بنجاح");
  };

  // delete student in case of confirm alert //
  const confirmDelete = async () => {
    if (selectedGroupId === null) return;

    await removeGroup(selectedGroupId);

    showSuccess("تم حذف المجموعة");

    setSelectedGroupId(null);
  };
  // -----------------------------//
  //  update group  //
  const updateGroup = async (updatedGroup: Group) => {
  console.log('updatedGroup.students', updatedGroup.students);
    console.log(updatedGroup);
    const { students, ...groupData } = updatedGroup;
  console.log("STUDENTS RECEIVED", students);
    try {
      await editGroup(groupData, students);
      // window.location.reload();
      showSuccess("تم تحديث المجموعة");
    } catch (error) {
      console.log("Error updating group", error);
    }
  };
  // -----------------------------//

  return (
    <View
      style={{
        direction: "rtl",
        overflowY: "scroll",
        height: "100%",
        paddingVertical: 50,
      }}
    >
      <Header<addGroupType>
        formName="Groups"
        title="المجموعات"
        subtitle="قسم طلابك لمجموعات وشارك تقاريرهم الشهرية دفعة واحدة  "
        btn="مجموعة جديدة "
        handleSubmit={AddGroup}
      />
      {groups.length === 0 && (
        <NoDataFallback<addGroupType>
          formName="Groups"
          Icon={() => <Feather name="folder-minus" size={30} color="gray" />}
          text="لاتوجد مجموعات مسجلة "
          btn="اضف اول مجموعة "
          handleSubmit={AddGroup}
        />
      )}
      {groups.length > 0 &&
        groups.map((group) => (
          <GroupCard<editGroupType>
            key={group.id}
            group={group}
              students={students}

            setSelectedGroupId={setSelectedGroupId}
            updateGroup={updateGroup}
          />
        ))}

      <CustomAlert
        show={selectedGroupId !== null}
        title="حذف المجموعة"
        message="هل أنت متأكد أنك تريد حذف هذه المجموعة؟"
        confirmText="حذف"
        cancelText="الغاء"
        onCancel={() => setSelectedGroupId(null)}
        onConfirm={confirmDelete}
      />
      {/* //-----------------------------// */}
    </View>
  );
}
