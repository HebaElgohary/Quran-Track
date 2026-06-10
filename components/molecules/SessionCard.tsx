import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/constants/theme";
import { Student } from "@/types/appTypes";

interface SessionCardProps {
  time: string;
  surah: string;
  grade: string;
  student?: Student;
  handelDelete: () => void;
}

export default function SessionCard({
  surah,
  time,
  grade,
  student,
  handelDelete,
}: SessionCardProps) {
  const gradeColors: Record<string, string> = {
    ممتاز: colors.excellent,
    "جيد جدا": colors.veryGood,
    جيد: colors.good,
    متوسط: colors.average,
    ضعيف: colors.bad,
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.studentSection}>
          <Title size="xl">
            {student?.nameAr || student?.nameEn || "طالب غير معروف"}
          </Title>

          <Text style={styles.time}>{time}</Text>
        </View>

        <View
          style={[
            styles.gradeBadge,
            {
              backgroundColor:
                gradeColors[grade] || colors.btnPrimary,
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
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>الحفظ الجديد:</Text>
          <Text style={styles.value}>{surah || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>المراجعة:</Text>
          <Text style={styles.value}>{surah || "-"}</Text>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actionsRow}>
        <Button variant="transparent" textColor="primary" size="sm">
          تقرير <Feather name="file-text" />
        </Button>

        <Button variant="transparent" textColor="warning" size="sm">
          تعديل <Feather name="edit-2" />
        </Button>

        <Button
          variant="transparent"
          textColor="danger"
          size="sm"
          onClick={handelDelete}
        >
          حذف <Feather name="trash-2" />
        </Button>
      </View>
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