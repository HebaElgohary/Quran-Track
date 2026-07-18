import { Student } from "@/types/appTypes";
import { Feather } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Button from "../atoms/Button";
import Hr from "../atoms/Hr";
import Title from "../atoms/Title";
import Avatar from "./Avatar";
import FormModal from "./form/FormModal";
import SwipeCard from "./SwipeCard";
import { colors } from "@/constants/theme";
import { getLevelColor } from "@/utils/getLevelColor ";

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

const levelStyle = getLevelColor(student.level);
  

// -----------------animation --------------------//
const scale = useRef(new Animated.Value(1)).current;

const pressIn = () => {
  Animated.spring(scale, {
    toValue: 0.9,
    useNativeDriver: true,
  }).start();
};

const pressOut = () => {
  Animated.spring(scale, {
    toValue: 1,
    friction: 4,
    useNativeDriver: true,
  }).start();
};
//-------------------------------------------//
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
        <View
  style={{
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 5,
    backgroundColor: colors.gray,
    borderTopLeftRadius: 22,
    borderBottomLeftRadius: 22,
  }}
/>
        <View style={styles.header}>
  <View style={styles.leftSection}>
    {isStudent && (
      <Avatar
        name={student.nameAr}
        image={image}
      />
    )}

    <View style={styles.textColumn}>
      <Title variant="btnPrimary" size="lg">
        {student.nameAr}
      </Title>

  <View
  style={[
    styles.levelBadge,
    {
      backgroundColor: levelStyle.backgroundColor,
      borderColor: levelStyle.borderColor,
      borderWidth: 1,
    },
  ]}
>
  <Text
    style={{ color: levelStyle.color }}
  >
    {student.level}
  </Text>
</View>
    </View>
  </View>

  <View style={styles.badge}>
    <Title size="md" variant="primary">
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
  <Animated.View
  style={{
    transform: [{ scale }],
  }}
>
  <Pressable
    onPress={() => setOpen(true)}
    style={[
      styles.iconButton,
      styles.editButton,
    ]}
  >
    <Feather
      name="edit-2"
      size={18}
      color={colors.warning}
    />
  </Pressable>
  </Animated.View>
{/* //------------------------------------// */}
  <Animated.View
  style={{
    transform: [{ scale }],
  }}
>
  <Pressable
    onPress={() => handleDelete(student.id)}
    style={[
      styles.iconButton,
      styles.deleteButton,
    ]}
  >
    <Feather
      name="trash-2"
      size={18}
      color="#DC2626"
    />
  </Pressable>
  </Animated.View>
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

  marginHorizontal: 16,
  marginVertical: 10,

  paddingHorizontal: 18,
  paddingVertical: 18,

  borderRadius: 22,

  borderWidth: 1,
  borderColor: "#EDF2F7",

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.08,
  shadowRadius: 18,

  elevation: 8,

  overflow: "hidden",
},

header: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  marginBottom: 20,
},
levelBadge: {
  marginTop: 2,

  paddingHorizontal: 10,
  paddingVertical: 5,

  borderRadius: 20,
},

 leftSection: {
  flexDirection: "row",
  alignItems: "flex-start",

  flex: 1,

  gap: 14,
},

  textColumn: {
    gap: 1,
    width:'60%',
    alignItems:'flex-start',
    flexWrap:'wrap'
  },

badge: {
  // backgroundColor: colors.secondary,
  paddingHorizontal: 1,
  paddingVertical: 7,
  borderRadius: 15,
},

actionsRow: {
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 12,

  marginTop: 6,
},

iconButton: {
  width: 42,
  height: 42,

  borderRadius: 21,

  justifyContent: "center",
  alignItems: "center",

  borderWidth: 1,
},

editButton: {
  backgroundColor: "#FFF7ED",
  borderColor: "#FCD34D",
},

deleteButton: {
  backgroundColor: "#FEF2F2",
  borderColor: "#FECACA",
},
});