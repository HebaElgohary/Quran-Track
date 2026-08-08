import { Schedule, Student } from "@/types/appTypes";
import { formatDate } from "@/utils/formatDate";
import { Feather } from "@expo/vector-icons";
import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import FormModal from "./form/FormModal";
import SwipeCard from "./SwipeCard";
import { colors } from "@/constants/theme";
import Action from "./Action";

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

      <View style={{ alignItems:'flex-end'}}>
        <Text style={styles.name}>
          {student?.nameAr??' '}
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
      سيتم التذكير قبل الموعد بـ 15 دقائق
    </Text>
  </View>
<View style={styles.actions}>
  <Action
    icon="edit-2"
    color={colors.warning}
    bg="#FFF7ED"
    pressedBg="#FDE7C7"
    onPress={() => setOpen(true)}
  />

  <Action
    icon="trash-2"
    color="#DC2626"
    bg="#FEF2F2"
    pressedBg="#FEE2E2"
    onPress={openDeleteAlert}
  />
{/* </View> */}
  {/* //-------------------------// */}

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
    width:'70%',
    // flex:1,
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
    fontSize:20,
    fontWeight:"700",
    color:colors.btnPrimary,
    marginBottom:6,
},

row:{
    flexDirection:"row-reverse",
    alignItems:"center",
    gap:3,
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
  alignItems: "center",
  gap: 12,

  marginTop: 12,
},

iconButton: {
  width: 44,
  height: 44,

  borderRadius: 22,

  justifyContent: "center",
  alignItems: "center",

  borderWidth: 1,

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.08,
  shadowRadius: 5,

  elevation: 3,
},

editButton: {
  backgroundColor: "#FFF7ED",
  borderColor: "#FCD34D",
},

deleteButton: {
  backgroundColor: "#FEF2F2",
  borderColor: "#FECACA",
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