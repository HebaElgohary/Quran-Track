import { Student } from "@/types/appTypes";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "../atoms/Button";
import Hr from "../atoms/Hr";
import Title from "../atoms/Title";
import Avatar from "./Avatar";
import FormModal from "./form/FormModal";

type updateType = (id: string, newData: any) => Promise<void>;
interface StudentCardProps {
  isStudent: boolean;
  student: Student;
  btn1: string;
  btn2: string;
  image?: string;
  handleDelete: (id: string) => void;
  updateStudent: updateType;
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
      {/* Header */}
      <View style={styles.row}>
        {/* Left side */}
        <View style={styles.leftSection}>
          {isStudent && <Avatar name={student.nameAr} image={image} />}

          <View style={styles.textColumn}>
            <Title variant="btnPrimary" size="xl">
              {student.nameAr}
            </Title>
            <Title size="sm">{student.level}</Title>
          </View>
        </View>

        {/* Right side */}
        <Title>{student.nameEn}</Title>
      </View>

      <Hr />

      {/* Actions */}
      <View style={styles.actionsRow}>
        <Button
          variant="transparent"
          textColor="warning"
          onClick={() => setOpen(true)}
        >
          {btn1} <Feather name="edit-2" />
        </Button>

        <Button
          variant="transparent"
          textColor="danger"
          onClick={() => handleDelete(student.id)}
        >
          {btn2} <Feather name="trash-2" />
        </Button>
      </View>
      <FormModal<updateType>
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
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 16,
    gap: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  textColumn: {
    flexDirection: "column",
    gap: 6,
  },

  actionsRow: {
    flexDirection: "row",
    gap: 10,
  },
});
