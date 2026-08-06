import { Group, Student } from "@/types/appTypes";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RectButton } from "react-native-gesture-handler";

import { groupColors } from "@/constants/theme";

import Hr from "../atoms/Hr";
import Title from "../atoms/Title";
import FormModal from "./form/FormModal";
import SwipeCard from "./SwipeCard";
import Action from "./Action";

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
    s => s.groupId === group.id
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

  // ---------------- Swipe Actions ----------------

  const renderRightActions = () => (
    <RectButton
      style={{
        width: 82,
        marginVertical: 8,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: `${accentColor}`,
      }}
      onPress={() => setOpen(true)}
    >
      <Feather
        name="edit-2"
        size={22}
        color="#fff"
      />
    </RectButton>
  );

  const renderLeftActions = () => (
    <RectButton
      style={{
        width: 82,
        marginVertical: 8,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EF4444",
      }}
      onPress={() => setSelectedGroupId(group.id)}
    >
      <Feather
        name="trash-2"
        size={22}
        color="#fff"
      />
    </RectButton>
  );

  return (
    <SwipeCard
      onEdit={() => setOpen(true)}
      onDelete={() => setSelectedGroupId(group.id)}
    >
      <Animated.View
        style={{
          transform: [{ scale: scaleAnim }],
          width: "95%",
          alignSelf: "center",
          marginVertical: 10,
        }}
      >
        <Pressable
          onPressIn={onPressIn}
          onPressOut={onPressOut}
        >
          <View
            style={{
              flexDirection: "row-reverse",
              borderRadius: 24,
              overflow: "hidden",

              backgroundColor: "#FFF",

              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.14,
              shadowRadius: 18,

              elevation: 8,
            }}
          >
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
                            {/* ---------------- HEADER ---------------- */}
              <View
                style={{
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    marginRight: 10,
                    alignItems:'flex-end'
                  }}
                >
                  <Title>{group.nameAr}</Title>

                  <Text
                    style={{
                      color: "#94A3B8",
                      marginTop: 4,
                      fontSize: 13,
                      fontStyle: "italic",
                      alignItems:'flex-start'
                    }}
                  >
                    {group.nameEn}
                  </Text>
                </View>

                <View
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    backgroundColor: accentColor,

                    borderWidth: 2,
                    borderColor: "#fff",
                  }}
                />
              </View>

              {/* ---------------- STUDENTS ---------------- */}

              <View
                style={{
                  flexDirection: "row",
                  justifyContent:'flex-end',
                  flexWrap: "wrap",
                  gap: 8,
                  marginTop: 18,
                }}
              >
                {groupStudents.length === 0 ? (
                  <Text
                    style={{
                      color: "#94A3B8",
                      fontSize: 12,
                    }}
                  >
                    لا يوجد طلاب بالمجموعة
                  </Text>
                ) : (
                  <>
                    {groupStudents.slice(0, 4).map(student => (
                      <View
                        key={student.id}
                        style={{
                          paddingHorizontal: 10,
                          paddingVertical: 5,

                          borderRadius: 20,

                          backgroundColor: "#F8FAFC",

                          borderWidth: 1,
                          borderColor: "#E2E8F0",
                        }}
                      >
                        <Text
                          style={{
                            color: "#334155",
                            fontSize: 12,
                            fontWeight: "600",
                          }}
                        >
                          {student.nameAr}
                        </Text>
                      </View>
                    ))}

                    {studentCount > 4 && (
                      <View
                        style={{
                          paddingHorizontal: 10,
                          paddingVertical: 5,

                          borderRadius: 20,

                          backgroundColor: `${accentColor}18`,
                        }}
                      >
                        <Text
                          style={{
                            color: accentColor,
                            fontWeight: "700",
                            fontSize: 12,
                          }}
                        >
                          +{studentCount - 4}
                        </Text>
                      </View>
                    )}
                  </>
                )}
              </View>

              {/* ---------------- COUNT ---------------- */}

              <View
                style={{
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  marginTop: 18,
                  gap: 8,
                }}
              >
                <View
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    backgroundColor: `${accentColor}18`,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="users"
                    size={15}
                    color={accentColor}
                  />
                </View>

                <Text
                  style={{
                    color: "#64748B",
                    fontSize: 13,
                    fontWeight: "600",
                  }}
                >
                  {studentCount} طالب
                </Text>
              </View>

              <Hr style={{alignSelf:'flex-end',marginTop:13,width:'80%',marginHorizontal:'auto'}}/>

                            {/* ---------- ACTIONS ---------- */}

              <View
                style={{
                  flexDirection: "row-reverse",
                  justifyContent: "flex-end",
                  gap: 12,
                  marginTop: 18,
                }}
              >
       <Action
  icon="edit-2"
  color={accentColor}
  bg={`${accentColor}20`}
  pressedBg={`${accentColor}45`}
  onPress={() => setOpen(true)}
/>

<Action
  icon="trash-2"
  color="#DC2626"
  bg="#FEF2F2"
  pressedBg="#FEE2E2"
  onPress={() => setSelectedGroupId(group.id)}
/>
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
    </SwipeCard>
  );
}