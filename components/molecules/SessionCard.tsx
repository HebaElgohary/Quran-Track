import { Session, Student } from "@/types/appTypes";
import { formatDate } from "@/utils/formatDate";
import { Feather } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

import Title from "../atoms/Title";
import FormModal from "./form/FormModal";
import Action from "./Action";

type UpdateDataType = Session;

interface SessionCardProps {
  time: Date;
  surah: string;
  grade: string;
  student?: Student;
  from: number;
  to: number;
  next: string;
  revision: string;
  handelDelete: () => void;
  handleUpdate: (data: UpdateDataType) => Promise<void>;
  session: Session;
  onReport: () => void;
}



export default function SessionCard({
  session,
  time,
  surah,
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


  const [open, setOpen] = useState(false);

  const gradeColor =
    grade === "ممتاز"
      ? "#16A34A"
      : grade === "جيد جدا"
        ? "#22C55E"
        : grade === "جيد"
          ? "#2563EB"
          : grade === "متوسط"
            ? "#F59E0B"
            : "#EF4444";

  return (
    <View style={styles.card}>
      {/* HEADER */}

      <View style={styles.header}>
        <View style={styles.studentInfo}>
          <Title size="xl">{student?.nameAr || "طالب غير معروف"}</Title>

          <View style={styles.dateRow}>
            <Feather name="calendar" size={13} color="#64748B" />

            <Text style={styles.date}>{formatDate(time)}</Text>
          </View>
        </View>

        <View
          style={[
            styles.grade,
            {
              backgroundColor: gradeColor,
            },
          ]}
        >
          <Text style={styles.gradeText}>{grade}</Text>
        </View>
      </View>

      {/* QURAN SECTION */}

      <View style={styles.quran}>
        <View style={styles.quranIcon}>
          <Feather name="book-open" size={18} color="#fff" />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.quranLabel}>السورة</Text>

          <Text style={styles.quranText}>{surah || "-"}</Text>

          <Text style={styles.ayah}>
            الآيات {from} - {to}
          </Text>
        </View>
      </View>

      {/* DETAILS */}

      <View style={styles.details}>
        <DetailBox icon="edit-3" title="الحفظ" value={next} />

        <DetailBox icon="rotate-cw" title="المراجعة" value={revision} />
      </View>

      {/* ACTIONS */}

      <View style={styles.actions}>
       <Action
  icon="file-text"
  color="#2563EB"
  bg="#EFF6FF"
  pressedBg="#DBEAFE"
  onPress={onReport}
/>
<Action
  icon="edit-2"
  color="#EA580C"
  bg="#FFF7ED"
  pressedBg="#FED7AA"
  onPress={() => setOpen(true)}
/>
    <Action
  icon="trash-2"
  color="#DC2626"
  bg="#FEF2F2"
  pressedBg="#FECACA"
  onPress={handelDelete}
/>
      </View>

      <FormModal<UpdateDataType>
        open={open}
        setOpen={setOpen}
        formData={session}
        formName="Sessions"
        handleSubmit={handleUpdate}
      />
    </View>
  );
}

function DetailBox({ icon, title, value }: any) {
  return (
    <View style={styles.detailBox}>
      <Feather name={icon} size={15} color="#2563EB" />

      <Text style={styles.detailTitle}>{title}</Text>

      <Text style={styles.detailValue} numberOfLines={1}>
        {value || "-"}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    // direction:"rtl",

    backgroundColor: "#fff",

    marginHorizontal: 12,

    marginVertical: 6,

    padding: 14,

    borderRadius: 20,

    borderWidth: 1,

    borderColor: "#E5E7EB",

    shadowColor: "#000",

    shadowOpacity: 0.05,

    shadowRadius: 8,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 2,
  },

  header: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "space-between",
  },

  studentInfo: {
    alignItems: "flex-start",
    width:'70%',

  },

  dateRow: {
    flexDirection: "row",

    alignItems: "center",

    gap: 5,

    marginTop: 4,
  },

  date: {
    fontSize: 12,

    color: "#64748B",
  },

  grade: {
    paddingHorizontal: 12,

    paddingVertical: 6,

    borderRadius: 20,
  },

  gradeText: {
    fontSize: 12,

    fontWeight: "800",

    color: "#fff",
  },

  quran: {
    marginTop: 12,

    backgroundColor: "#065F46",

    borderRadius: 16,

    padding: 12,

    flexDirection: "row-reverse",

    alignItems: "center",

    gap: 10,
  },

  quranIcon: {
    width: 38,

    height: 38,

    borderRadius: 20,

    backgroundColor: "rgba(255,255,255,.2)",

    alignItems: "center",

    justifyContent: "center",
  },

  quranLabel: {
    fontSize: 11,

    color: "#D1FAE5",
  },

  quranText: {
    fontSize: 16,

    fontWeight: "800",

    color: "#fff",
  },

  ayah: {
    fontSize: 12,

    color: "#D1FAE5",
  },

  details: {
    flexDirection: "row",

    gap: 8,

    marginTop: 10,
  },

  detailBox: {
    flex: 1,

    backgroundColor: "#F8FAFC",

    borderRadius: 12,

    padding: 10,

    alignItems: "center",
  },

  detailTitle: {
    fontSize: 11,

    color: "#64748B",

    marginTop: 3,
  },

  detailValue: {
    fontSize: 13,

    fontWeight: "700",

    color: "#1E293B",

    marginTop: 3,
  },

  actions: {
    flexDirection: "row",

    justifyContent: "center",

    gap: 14,

    marginTop: 12,
  },

  action: {
    width: 45,

    height: 45,

    borderRadius: 21,

    alignItems: "center",

    justifyContent: "center",
  },
});
