import { Group, GroupFormData } from "@/types/appTypes";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../atoms/Button";
import Hr from "../atoms/Hr";
import Title from "../atoms/Title";
import { groupColors } from "@/constants/theme";
import { useStudents } from "@/hooks/useStudent";
import FormModal from "./form/FormModal";

 type editGroupType= Group
interface GroupCardProps{
  group: Group;
  setSelectedGroupId: (id: number) => void; //selectedGroupId
  updateGroup: (data: editGroupType) => Promise<void>;
}

export default function GroupCard<T>({ group, setSelectedGroupId ,updateGroup}: GroupCardProps) {
  
  const [open,setOpen] = useState(false) 
  const { students } = useStudents()
  console.log(students)
  const groupStudents = students.filter(
  student => student.groupId === group.id
);
  
const groupWithStudents = {
  ...group,
  students: groupStudents,
};
  const studentCount = groupStudents ? groupStudents.length : 0;
  return (
    <View
      style={{
        backgroundColor: "white",
        marginHorizontal: 10,
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        borderTopWidth: 10,
        
        borderTopColor: groupColors[group.color as keyof typeof groupColors],
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {/* first row */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {/* first char  and titleAr&subtitle */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 4,
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          {/* titleAr & subtitle */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              marginVertical: 7,
            }}
          >
            <Title>{group.nameAr}</Title>
            <Text>
              <Feather name="users" size={16} color="gray" /> {studentCount}{" "}
              {studentCount === 1 ? "طالب" : "طلاب"}
            </Text>
          </View>
          {/* titleAr & subtitle */}
        </View>

        <Text>{group.nameEn}</Text>
      </View>
      {/* first row */}
      <Hr></Hr>
      {/* second row */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "3px",
          marginVertical: 10,
        }}
      >
        <Button variant="transparent" textColor="danger" onClick={() =>{
          // updateGroup(group)
          setOpen(!open)}}>
          <Feather name="edit" size={20} color="black" />
        </Button>
        <Button variant="transparent" textColor="danger" onClick={() => {setSelectedGroupId(group.id)}} >
          <Feather name="trash-2" size={20} color="red" />
        </Button>
      </View>

      {/* second row */}

      {/* //modal form */}
        <FormModal<editGroupType>
              open={open}
              setOpen={setOpen}
              formData={groupWithStudents}
              data={groupStudents}
              formName="Groups"
              handleSubmit={updateGroup}
            />
            {/* ------------------------ */}
    </View>
  );
}
