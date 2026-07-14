import { Schedule, Student } from "@/types/appTypes";
import { formatDate } from "@/utils/formatDate";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import FormModal from "./form/FormModal";
import SwipeCard from "./SwipeCard";
import { colors } from "@/constants/theme";

type updateDataType = Schedule;

interface Props {
  student?: Student;
  schedule: Schedule;
  duration: number;
  handelUpdate: (data: Schedule) => Promise<void>;
  openDeleteAlert: () => void;
}

export default function ScheduleCard({
  schedule,
  handelUpdate,
  openDeleteAlert,
  student,

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
   <View style={styles.card}>
  {/* Header */}
  <View style={styles.header}>

    <View style={styles.leftSide}>

      <View style={styles.iconContainer}>
        <Feather
          name="bell"
          size={22}
          color={colors.btnPrimary}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.name}>
          {student?.nameAr ?? "طالب"}
        </Text>

        <View style={styles.row}>
          <Feather
            name="calendar"
            size={14}
            color="#64748B"
          />

          <Text style={styles.subText}>
            {formatDate(schedule.dateTime)}
          </Text>
        </View>

        <View style={styles.row}>
          <Feather
            name="clock"
            size={14}
            color="#64748B"
          />

          <Text style={styles.subText}>
            {schedule.dateTime.toLocaleTimeString("ar-EG", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </View>

      </View>

    </View>

    <View style={styles.durationBadge}>
      <Text style={styles.durationText}>
        {duration} دقيقة
      </Text>
    </View>

  </View>

  <View style={styles.divider} />

  <View style={styles.reminder}>
    <Feather
      name="volume-2"
      size={16}
      color="#2563EB"
    />

    <Text style={styles.reminderText}>
      سيتم التذكير قبل الموعد بـ 5 دقائق
    </Text>
  </View>
  <View style={styles.actions}>
  <Button
    variant="transparent"
    textColor="warning"
    size="lg"
    onClick={() => setOpen(true)}
  >
    <Feather
      name="edit-2"
      size={14}
      color={colors.warning}
    />
    <Text style={styles.actionText}>تعديل</Text>
  </Button>

  <Button
    variant="transparent"
    textColor="danger"
    size="lg"
    onClick={openDeleteAlert}
  >
    <Feather
      name="trash-2"
      size={14}
      color={colors.danger}
    />
    <Text style={styles.actionText}>حذف</Text>
  </Button>
</View>
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

const styles = StyleSheet.create({

card: {
  backgroundColor: "#fff",
  marginHorizontal: 16,
  marginVertical: 10,
  padding: 20,
  borderRadius: 24,

  shadowColor: "#000",
  shadowOpacity: 0.06,
  shadowRadius: 10,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  elevation: 3,
},

header:{
    flexDirection:"row-reverse",
    justifyContent:"space-between",
    alignItems:"flex-start",
    gap:8
},

leftSide:{
    flexDirection:"row-reverse",
    flex:1,
        gap:8

},

iconContainer:{
    width:48,
    height:48,
    borderRadius:14,
    backgroundColor:colors.gray,
    justifyContent:"center",
    alignItems:"center",
    marginHorizontal:12,
},

name:{
    fontSize:17,
    fontWeight:"700",
    color:"#111827",
    marginBottom:6,
},

row:{
    flexDirection:"row-reverse",
    alignItems:"center",
    marginTop:4,
},

subText:{
    marginLeft:6,
    color:"#64748B",
    fontSize:13,
},

durationBadge:{
    backgroundColor:colors.secondary,
    paddingHorizontal:12,
    paddingVertical:7,
    borderRadius:20,
},

durationText:{
    color:"#059669",
    fontWeight:"700",
    fontSize:12,
},
actions: {
  flexDirection: "row-reverse",
  justifyContent: "flex-end",
  gap: 12,
  marginTop: 18,
},

actionText: {
  marginLeft: 5,
  fontSize: 13,
  fontWeight: "600",
  width:'60%'
},

divider:{
    height:1,
    backgroundColor:colors.gray,
    marginVertical:16,
},

reminder:{
    flexDirection:"row-reverse",
    alignItems:"center",
        gap:10

},

reminderText:{
    marginLeft:8,
    color:"#475569",
    fontSize:13,
},
});