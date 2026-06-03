import GroupCard from "@/components/molecules/GroupCard";
import Header from "@/components/organisms/Header";
import NoDataFallback from "@/components/organisms/NoDataFallback";
import useGroups from "@/hooks/useGroup";
import { useToast } from "@/hooks/useToast";
import { GroupFormData, } from "@/types/appTypes";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

export default function Groups() {
  const { groups, loading, createGroup } = useGroups();
  const { showSuccess } = useToast();

  type addGroupType = GroupFormData;
  const AddGroup: (formData: GroupFormData) => Promise<void> = async (
    formData: GroupFormData,
  ) => {
    console.log('group data areeeeeee',formData)
    const { students, ...groupData } = formData;
     await createGroup(groupData,students);
     showSuccess( 'تم إضافة المجموعة بنجاح',
  );

  };
  return (
    <View style={{direction:'rtl',overflowY:'scroll',height:'100%',paddingVertical:50}} >
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
      {
        groups.map((group) => (
          <GroupCard key={group.id} group={group} />))
      }
      
    </View>
  );
}
