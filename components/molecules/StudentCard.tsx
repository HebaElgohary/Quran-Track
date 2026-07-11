import { Student } from "@/types/appTypes";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../atoms/Button";
import Hr from "../atoms/Hr";
import Title from "../atoms/Title";
import Avatar from "./Avatar";
import FormModal from "./form/FormModal";

type updateDataType =Student;
interface StudentCardProps {
  isStudent: boolean;
  student: Student;
  btn1: string;
  btn2: string;
  image?: string;
  handleDelete: (id: number) => void;
  updateStudent:  ( newData: updateDataType) => Promise<void>;
}

export default function StudentCard({
  student,
  btn1,
  btn2,
  isStudent,
  image,
  handleDelete,
  updateStudent,
}: StudentCardProps) {
  const [open, setOpen] = useState(false);
  return (
<View style={styles.container}>
  <View style={styles.row}>
    <View style={styles.leftSection}>
      {isStudent && (
        <Avatar
          name={student.nameAr}
          image={image}
        />
      )}

      <View style={styles.textColumn}>
        <Title variant="btnPrimary" size="md">
          {student.nameAr}
        </Title>

        <Title size="sm">
          {student.level}
        </Title>
      </View>
    </View>

    <View style={styles.badge}>
      <Title size="sm">
        {student.nameEn}
      </Title>
    </View>
  </View>

  <Hr style={{width:'80%',marginHorizontal:'auto'}} />

  <View style={styles.actionsRow}>
    <View style={styles.actionBtn}>
      <Button
        variant="transparent"
        textColor="warning"
        onClick={() => setOpen(true)}
      >
        {btn1} <Feather name="edit-2" />
      </Button>
    </View>

    <View style={styles.actionBtn}>
      <Button
        variant="transparent"
        textColor="danger"
        onClick={() => handleDelete(student.id)}
      >
        {btn2} <Feather name="trash-2" />
      </Button>
    </View>
  </View>

  <FormModal<updateDataType>
    open={open}
    setOpen={setOpen}
    formData={student}
    formName="Students"
    handleSubmit={updateStudent}
  />
</View>
  );
}
const styles = StyleSheet.create({
 container: {
  backgroundColor: "#fff",

  marginHorizontal: 12,
  marginVertical: 8,

  paddingVertical: 18,
  paddingHorizontal: 16,

  borderRadius: 14,

  borderWidth: 1,
  borderColor: "#F1F5F9",

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.08,
  shadowRadius: 6,

  elevation: 2,
},

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:30
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    flex: 1,
  },

  textColumn: {
    gap: 4,
    flexShrink: 1,
  },

badge: {
  backgroundColor: "#F3F7F8",
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 30,
},
  actionsRow: {
    flexDirection: "row",
    gap: 10,
  },

  actionBtn: {
    flex: 1,
    alignItems: "center",
  },
});