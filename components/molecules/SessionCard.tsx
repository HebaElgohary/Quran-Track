import { colors } from "@/constants/theme";
import { Session, Student } from "@/types/appTypes";
import { formatDate } from "@/utils/formatDate";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import FormModal from "./form/FormModal";

type updateDataType = Session;
interface SessionCardProps {
  time: string;
  surah: string;
  grade: string;
  student?: Student;
  from: number;
  to: number;
  next: string;
  revision: string;
  handelDelete: () => void;
  handleUpdate: (data: updateDataType) => Promise<void>;
  session: Session;
  onReport: () => void;
}

export default function SessionCard({
  session,
  surah,
  time,
  grade,
  student,
  from,
  to,
  next,
  revision,
  handelDelete,
  handleUpdate,
  onReport,
}: SessionCardProps) {
  const gradeColors: Record<string, string> = {
    ممتاز: colors.excellent,
    "جيد جدا": colors.veryGood,
    جيد: colors.good,
    متوسط: colors.average,
    ضعيف: colors.bad,
  };
  const [open, setOpen] = React.useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.studentSection}>
          <Title size="xl">
            {student?.nameAr || student?.nameEn || "طالب غير معروف"}
          </Title>

          <Text style={styles.time}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Feather name="calendar" size={14} color="#888" />
              <Text style={{ color: "#888", fontSize: 13 }}>
                {formatDate(time)}
              </Text>
            </View>
          </Text>
        </View>

        <View
          style={[
            styles.gradeBadge,
            {
              backgroundColor: gradeColors[grade] || colors.btnPrimary,
            },
          ]}
        >
          <Text style={styles.gradeText}>{grade}</Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.label}>السورة:</Text>
          <Text style={styles.value}>{surah || "-"}</Text>
          <Text style={styles.value}>{` (${to}-${from}) `}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>الحفظ الجديد:</Text>
          <Text style={styles.value}>{next}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>المراجعة:</Text>
          <Text style={styles.value}>{revision || "-"}</Text>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actionsRow}>
        <Button
          variant="transparent"
          textColor="primary"
          size="md"
          onClick={onReport}
        >
          تقرير <Feather name="file-text" />
        </Button>

        <Button
          variant="transparent"
          textColor="warning"
          size="md"
          onClick={() => setOpen(true)}
        >
          تعديل <Feather name="edit-2" />
        </Button>

        <Button
          variant="transparent"
          textColor="danger"
          size="md"
          onClick={handelDelete}
        >
          حذف <Feather name="trash-2" />
        </Button>
      </View>
      <FormModal<updateDataType>
        open={open}
        setOpen={setOpen}
        formData={session}
        formName="Sessions"
        handleSubmit={handleUpdate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#ECECEC",
    gap: 18,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  studentSection: {
    flex: 1,
    gap: 4,
  },

  time: {
    color: "#888",
    fontSize: 13,
  },

  gradeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },

  gradeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },

  content: {
    gap: 12,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
  },

  label: {
    fontWeight: "700",
    color: colors.btnPrimary,
    fontSize: 15,
  },

  value: {
    fontSize: 15,
    color: "#444",
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: "#F2F2F2",
    paddingTop: 12,
  },
});
