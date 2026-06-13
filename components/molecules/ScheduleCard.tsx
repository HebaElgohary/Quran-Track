import { Schedule, Student } from "@/types/appTypes";
import { getDayName } from "@/utils/getDayName";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import FormModal from "./form/FormModal";
import SwipeCard from "./SwipeCard";
import { formatDate } from "@/utils/formatDate";

type updateDataType = Schedule;

interface Props {
  student?: Student;
  schedule: Schedule;
  date: string;
  time: string;
  duration: number;
  handelUpdate: (data: updateDataType) => Promise<void>;
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

  // ---------- SWIPE RIGHT (EDIT) ----------
  const renderRightActions = () => {
    return (
      <RectButton
        style={{
          backgroundColor: "#F59E0B",
          justifyContent: "center",
          alignItems: "center",
          width: 80,
          marginVertical: 6,
          borderRadius: 16,
        }}
        onPress={() => setOpen(true)}
      >
        <Feather name="edit-2" size={20} color="white" />
      </RectButton>
    );
  };

  // ---------- SWIPE LEFT (DELETE) ----------
  const renderLeftActions = () => {
    return (
      <RectButton
        style={{
          backgroundColor: "#EF4444",
          justifyContent: "center",
          alignItems: "center",
          width: 80,
          marginVertical: 6,
          borderRadius: 16,
        }}
        onPress={openDeleteAlert}
      >
        <Feather name="trash-2" size={20} color="white" />
      </RectButton>
    );
  };

  return (
    <SwipeCard onEdit={() => setOpen(true)} onDelete={openDeleteAlert}>
      {/* your schedule UI here */}
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 18,
          padding: 16,
          borderWidth: 1,
          borderColor: "#eee",
          marginBottom: 12,
        }}
      >
        {/* HEADER */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <View
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                backgroundColor: "#F3F4F6",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="bell" size={20} color="#6B7280" />
            </View>

            <View>
              <Title>
                {student?.nameAr || student?.nameEn || "طالب غير معروف"}
              </Title>
              <Text style={{ color: "#6B7280", marginTop: 2 }}>
  
    {formatDate(date) }{"    •     "} {time}
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#EEF2FF",
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 12,
            }}
          >
            <Text style={{ fontSize: 12, color: "#4F46E5", fontWeight: "600" }}>
              {duration} دقيقة
            </Text>
          </View>
        </View>

        {/* ACTION BUTTONS */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: 14,
            gap: 10,
          }}
        >
          <Button
            variant="transparent"
            textColor="warning"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Feather name="edit-2" size={14} /> تعديل
          </Button>

          <Button
            variant="transparent"
            textColor="danger"
            size="sm"
            onClick={openDeleteAlert}
          >
            <Feather name="trash-2" size={14} /> حذف
          </Button>
        </View>

        {/* MODAL */}
        <FormModal<updateDataType>
          open={open}
          setOpen={setOpen}
          formData={schedule}
          formName="Schedule"
          handleSubmit={handelUpdate}
        />
      </View>
    </SwipeCard>
  );
}
