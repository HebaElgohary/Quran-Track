import { Group, Student } from "@/types/appTypes";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Animated,
  Pressable,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { groupColors } from "@/constants/theme";
import FormModal from "./form/FormModal";
import Button from "../atoms/Button";
import Hr from "../atoms/Hr";
import Title from "../atoms/Title";

type editGroupType = Group;

interface GroupCardProps {
  group: Omit<Group, "students">  ;
  setSelectedGroupId: (id: number) => void;
  updateGroup: (data: editGroupType) => Promise<void>;
  students: Student[];
}

export default function GroupCard({
  students,
  group,
  setSelectedGroupId,
  updateGroup,
}: GroupCardProps) {
  const [open, setOpen] = useState(false);
  const scaleAnim = useState(new Animated.Value(1))[0];

  // ===== USERS COLOR (SOURCE OF TRUTH) =====
  const accentColor =
    groupColors[group.color as keyof typeof groupColors] || "#6366F1";

  // ===== GRADIENT BASED ON USER COLOR =====
  const gradient = [
    accentColor + "18",
    "#ffffff",
    "#ffffff",
  ] as const;

  const groupStudents = students.filter(
    (student) => student.groupId === group.id
  );

  const groupWithStudents = {
    ...group,
    students: groupStudents,
  };

  const studentCount = groupStudents.length;

  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.98,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
console.log('group students inside the card',groupStudents)
  return (
    <Animated.View
      style={{
        transform: [{ scale: scaleAnim }],
        marginHorizontal: 12,
        marginVertical: 10,
        width: "90%",
      }}
    >
      <Pressable
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={{ width: "100%" }}
      >
        <LinearGradient
          colors={gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            borderRadius: 18,
            padding: 16,
            width: "100%",
            minHeight: 150,

            borderLeftWidth: 6,
            borderLeftColor: accentColor,

            shadowColor: accentColor,
            shadowOpacity: 0.2,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 6 },
            elevation: 4,
          }}
        >
          {/* ================= HEADER ================= */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            {/* LEFT */}
            <View style={{ flex: 1 }}>
              <Title
                // style={{
                //   fontSize: 18,
                //   fontWeight: 700,
                // }}
              >
                {group.nameAr}
                
              </Title>
{groupStudents.map((student) => <Text>{student.nameAr}</Text>)}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 6,
                  gap: 6,
                }}
              >
                <Feather name="users" size={14} color="#6B7280" />
                <Text style={{ color: "#6B7280", fontSize: 13 }}>
                  {studentCount}{" "}
                  {studentCount === 1 ? "طالب" : "طلاب"}
                </Text>
              </View>
            </View>

            {/* COLOR DOT */}
            <View
              style={{
                width: 14,
                height: 14,
                borderRadius: 7,
                backgroundColor: accentColor,
              }}
            />
          </View>

          {/* ================= ENGLISH NAME ================= */}
          <Text
            style={{
              marginTop: 6,
              color: "#9CA3AF",
              fontSize: 13,
              fontStyle: "italic",
            }}
          >
            {group.nameEn}
          </Text>

          {/* ================= DIVIDER ================= */}
          <View style={{ marginVertical: 12 }}>
            <Hr />
          </View>

          {/* ================= ACTIONS ================= */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 10,
            }}
          >
            <Button
              variant="transparent"
              onClick={() => setOpen(!open)}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 12,
                borderRadius: 12,
                backgroundColor: `${accentColor}18`,
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Feather name="edit" size={16} color="#374151" />
              <Text style={{ fontSize: 12, color: "#374151" }}>
                تعديل
              </Text>
            </Button>

            <Button
              variant="transparent"
              onClick={() => setSelectedGroupId(group.id)}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 12,
                borderRadius: 12,
                backgroundColor: "#FEE2E2",
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Feather name="trash-2" size={16} color="#DC2626" />
              <Text style={{ fontSize: 12, color: "#DC2626" }}>
                حذف
              </Text>
            </Button>
          </View>

          {/* ================= MODAL ================= */}
          <FormModal<editGroupType>
            open={open}
            setOpen={setOpen}
            formData={groupWithStudents}
            data={groupStudents}
            formName="Groups"
            handleSubmit={updateGroup}
          />
        </LinearGradient>
      </Pressable>
    </Animated.View>
  );
}