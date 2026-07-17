import { Student } from "@/types/appTypes";
import { Feather } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  View,
} from "react-native";

import Button from "../atoms/Button";
import Hr from "../atoms/Hr";
import Title from "../atoms/Title";
import Avatar from "./Avatar";
import FormModal from "./form/FormModal";
import SwipeCard from "./SwipeCard";
import { colors } from "@/constants/theme";

type UpdateDataType = Student;

interface StudentCardProps {
  isStudent: boolean;
  student: Student;
  btn1: string;
  btn2: string;
  image?: string;
  handleDelete: (id: number) => void;
  updateStudent: (newData: UpdateDataType) => Promise<void>;
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

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.985,
      friction: 8,
      tension: 120,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 8,
      tension: 120,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SwipeCard
      onEdit={() => setOpen(true)}
      onDelete={() => handleDelete(student.id)}
    >
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <View style={styles.header}>
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

<Hr
  style={{
    width: "85%",
    alignSelf: "center",
    marginBottom: 18,
  }}
/>

<View style={styles.actionsRow}>
  <View style={styles.actionBtn}>
    <Button
      variant="gray"
      textColor="warning"
      size="lg"
      onClick={() => setOpen(true)}
    >
      {'تعديل'}
      <Feather
        name="edit-2"
        size={15}
      />
    </Button>
  </View>

  <View style={styles.actionBtn}>
    <Button
      variant="danger"
      textColor="white"
      size="lg"
      onClick={() => handleDelete(student.id)}
    >
      {'حذف'}
      <Feather
        name="trash-2"
        size={15}
      />
    </Button>
  </View>
</View>

<FormModal<UpdateDataType>
  open={open}
  setOpen={setOpen}
  formData={student}
  formName="Students"
  handleSubmit={updateStudent}
/>
      </Animated.View>
    </SwipeCard>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",

    marginHorizontal: 12,
    marginVertical: 8,

    paddingHorizontal: 18,
    paddingVertical: 18,

    borderRadius: 18,

    borderWidth: 1,
    borderColor: "#EEF2F7",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.12,
    shadowRadius: 18,

    elevation: 8,
  },

  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",


    marginBottom: 22,
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"flex-start",

    flex: 1,
    gap: 14,
  },

  textColumn: {
    gap: 3,
  },

  badge: {

backgroundColor:colors.secondary,
    paddingHorizontal: 12,
    paddingVertical: 7,

    borderRadius: 15,
  },

  actionsRow: {
    flexDirection: "row",
    gap: 12,
justifyContent:'flex-end',
    marginTop: 4,
  },

  actionBtn: {
    // flex: 1,
  },
});