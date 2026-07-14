import { Group, Student } from "@/types/appTypes";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { groupColors } from "@/constants/theme";
import FormModal from "./form/FormModal";
import Hr from "../atoms/Hr";
import Title from "../atoms/Title";

type editGroupType = Group;

interface GroupCardProps {
  group: Omit<Group, "students">;
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

  const accentColor =
    groupColors[group.color as keyof typeof groupColors] || "#6366F1";

  const gradient = [`${accentColor}15`, "#fff", "#fff"] as const;

  const groupStudents = students.filter(
    (s) => s.groupId === group.id
  );

  const studentCount = groupStudents.length;
   const groupWithStudents = {

    ...group,

    students: groupStudents,

  };

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

  return (
    <Animated.View
      style={{
        transform: [{ scale: scaleAnim }],
        width: "92%",
        alignSelf: "center",
        marginVertical: 10,
        
      }}
    >
      <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
        <View
          style={{
            flexDirection: "row",
            borderRadius: 24,
            overflow: "hidden",
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 10,
            elevation: 3,
          }}
        >
          {/* Accent bar */}
          <View
            style={{
              width: 6,
              backgroundColor: accentColor,
            }}
          />

          <LinearGradient
            colors={gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              flex: 1,
              padding: 16,
              minHeight: 140,
            }}
          >
            {/* HEADER */}
            <View
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-between",
              }}
            >
              <View style={{ margin:8, display:'flex' }}>
                <Title >{group.nameAr}</Title>

                <Text
                  style={{
                    color: "#9CA3AF",
                    marginTop: 2,
                    fontSize: 13,
                    fontStyle: "italic",
                    alignSelf:'center',
                    marginBottom:11

                  }}
                >
                  {group.nameEn}
                </Text>

                {/* Students chips */}
                <View
                  style={{
                    flexDirection: "row-reverse",
                    flexWrap: "wrap",
                    marginTop: 10,
                    gap: 6,
                  }}
                >
                  {groupStudents.map((s) => (
                    <View
                      key={s.id}
                      style={{
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        borderRadius: 12,
                        backgroundColor: "#F3F4F6",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#374151",
                        }}
                      >
                        {s.nameAr}
                      </Text>
                    </View>
                  ))}

                  {/* {studentCount > 3 && (
                    <View
                      style={{
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        borderRadius: 12,
                        backgroundColor: `${accentColor}20`,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          color: "#374151",
                        }}
                      >
                        +{studentCount - 3}
                      </Text>
                    </View>
                  )} */}
                </View>

                {/* count */}
                <View
                  style={{
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    marginTop: 10,
                    gap: 6,
                  }}
                >
                  <Feather name="users" size={14} color="#6B7280" />
                  <Text style={{ color: "#6B7280", fontSize: 13 }}>
                    {studentCount} طلاب
                  </Text>
                </View>
              </View>

              {/* color badge */}
              <View
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 7,
                  backgroundColor: accentColor,
                }}
              />
            </View>

            <Hr />

            {/* ACTIONS (modern icons) */}
            <View
              style={{
                flexDirection: "row-reverse",
                justifyContent: "flex-end",
                gap: 14,
              }}
            >
              <Pressable
                onPress={() => setOpen(true)}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 19,
                  backgroundColor: `${accentColor}15`,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather name="edit-2" size={16} color={accentColor} />
              </Pressable>

              <Pressable
                onPress={() => setSelectedGroupId(group.id)}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 19,
                  backgroundColor: "#FEE2E2",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather name="trash-2" size={16} color="#DC2626" />
              </Pressable>
            </View>

            <FormModal<editGroupType>
              open={open}
              setOpen={setOpen}
              formData={groupWithStudents}
              data={groupStudents}
              formName="Groups"
              handleSubmit={updateGroup}
            />
          </LinearGradient>
        </View>
      </Pressable>
    </Animated.View>
  );
}