import CustomAlert from "@/components/atoms/CustomAlert";
import GroupCard from "@/components/molecules/GroupCard";
import Header from "@/components/organisms/Header";
import NoDataFallback from "@/components/organisms/NoDataFallback";
import useGroups from "@/hooks/useGroup";
import { useStudents } from "@/hooks/useStudent";
import { useToast } from "@/hooks/useToast";
import { Group, GroupFormData } from "@/types/appTypes";
import { Feather } from "@expo/vector-icons";
import Loading from "../../animations/Loading";
import React from "react";
import { View } from "react-native";
type addGroupType = GroupFormData;
type editGroupType = Group;

export default function Groups() {
  //calling hooks
  const { groups, loading, createGroup, removeGroup, editGroup } = useGroups();
  const { showSuccess } = useToast();
  const { students,assignToGroup,removeFromGroup ,loadStudents} = useStudents();
  const [selectedGroupId, setSelectedGroupId] = React.useState<number | null>(
    null,
  );
  //------------------------------//

  console.log("num of grouooopppps;", groups);
  const AddGroup: (formData: addGroupType) => Promise<void> = async (
    formData: addGroupType,
  ) => {
    const { students, ...groupdata } = formData;
    console.log("inside addGroup");
    console.log("group data areeeeeee", formData);
 
    console.log("students before send to creategroup", students);
  const group  =  await createGroup(groupdata, students);
  console.log('group created', group);
    await assignToGroup(
  students.map((s) => s.id),
  group?.id as number
);

await loadStudents();
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
  const studentIds = students?.map((student) => student.id);
    try {
      await removeFromGroup(groupData.id);
      await assignToGroup(studentIds, groupData.id);
      await editGroup(updatedGroup, students);
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
      {loading && <Loading />}
      {groups.length > 0 &&
        groups.map((group) => (
          <GroupCard
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
