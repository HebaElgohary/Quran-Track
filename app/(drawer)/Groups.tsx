import Header from "@/components/organisms/Header";
import NoDataFallback from "@/components/organisms/NoDataFallback";
import NotificationCard from "@/components/organisms/NotificationsCard";
import useGroups from "@/hooks/useGroup";
import { addGroup } from "@/storage/groupsStorage";
import { assignStudentsToGroup } from "@/storage/studentsStorage";
import { GroupFormData } from "@/types/appTypes";

import { Feather } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

export default function Groups() {
 const { groups, loading,createGroup } = useGroups();

 type addGroupType = (formData: GroupFormData) => Promise<void>
const AddGroup:addGroupType = async (formData:GroupFormData) => {
  const { students, ...groupData } = formData;

  const group  = await addGroup(groupData);
  if(!group) return

  await assignStudentsToGroup(students, group.id);
};
  return (
    <View style={{ direction: "rtl" }}>
      <Header <addGroupType>
        formName="Groups"
        title="المجموعات"
        subtitle="قسم طلابك لمجموعات وشارك تقاريرهم الشهرية دفعة واحدة  "
        btn="مجموعة جديدة "
        handleSubmit={AddGroup}
      />
      {groups.length === 0 && (
        <NoDataFallback
          formName="Groups"
          Icon={() => <Feather name="folder-minus" size={30} color="gray" />}
          text="لاتوجد مجموعات مسجلة "
          btn="اضف اول مجموعة "
        />
      )}
    </View>
  );
}
