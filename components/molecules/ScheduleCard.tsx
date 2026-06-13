import { Schedule, Student } from "@/types/appTypes";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import FormModal from "./form/FormModal";


type updateDataType=Schedule

interface Props {
  student?: Student;
  schedule: Schedule;
  date: string;
  time: string;
  duration: number;
  handelUpdate: (data: updateDataType) =>Promise<void>
  openDeleteAlert: () => void;
}
export default function ScheduleCard({
  schedule,
  handelUpdate,
  openDeleteAlert,
  student,
  date,
  time,
  duration,
}: Props) {
      const [open, setOpen] = React.useState(false);
    
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 11,
        alignItems: "center",
        backgroundColor: "#FFFF",
        padding: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#ccc",
      }}
    >
      <Feather name="bell" size={30} color="gray" />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          justifyContent: "space-between",
        }}
      >
        <Title> {student?.nameAr || student?.nameEn || "طالب غير معروف"}</Title>
        <Text>
          {date} {time}
        </Text>
        <Text>{duration} دقيقة</Text>
      </View>
      <Button
        variant="transparent"
        textColor="warning"
        size="sm"
        onClick={() => setOpen(true)}
      >
        تعديل <Feather name="edit-2" />
      </Button>

      <Button
        variant="transparent"
        textColor="danger"
        size="sm"
        onClick={openDeleteAlert}
      >
        حذف <Feather name="trash-2" />
      </Button>
          <FormModal<updateDataType>
                    open={open}
                    setOpen={setOpen}
                    formData={schedule}
                    formName="Schedule"
                    handleSubmit={handelUpdate}
                  />
    </View>
  );
}
