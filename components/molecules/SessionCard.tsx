import React from "react";
import { Text, View } from "react-native";
import Button from "../atoms/Button";
import Hr from "../atoms/Hr";
import Title from "../atoms/Title";
import { Feather } from "@expo/vector-icons";
import Avatar from "./Avatar";
import { StyleSheet } from "react-native";
import { colors } from "@/constants/theme";


interface SessionCardProps {
  nameAr: string;
 
  time:string,
  surah:string
grade:string
}

export default function SessionCard({
  nameAr,

  surah,
  time,
  grade,
  
}: SessionCardProps) {
 const gradeColors={
  "ممتاز":colors.excellent,
  "جيد":colors.good,
  "متوسط":colors.average,
  "ضعيف":colors.bad,
  "جيد جدا":colors.veryGood,
  // "مقبول":colors.accepted
 }
  return (
    <View style={styles.container}>
      {/* Header */}
  <View style={{display:'flex',flexDirection:'column',gap:20}}>
    {/* first row */}
    <View style={styles.row}>
      <Title>{nameAr}</Title>
      <View style={{backgroundColor:colors.veryGood,padding:3,borderRadius:10}}>
        <Text style={{fontSize:20,color:colors.btnPrimary}}>{grade}</Text>
      </View>
      <Text>{time}</Text>

    </View>
    {/* ---------------------- */}

    {/* second row */}
    <View style={styles.row}>
          <Title size="md">السورة{':'}</Title>
          <Text>{surah}</Text>
    </View>
    {/* ---------------------- */}
       {/* third row */}
    <View style={styles.row}>
          <Title size="md">حفظ جديد{':'}</Title>
          <Text>{surah}</Text>
    </View>
    {/* ---------------------- */} 
      {/* fourth row */}
    <View style={styles.row}>
          <Title size="md">مراجعة{':'}</Title>
          <Text>{surah}</Text>
    </View>
    {/* ---------------------- */}
  </View>
  {/* ---------------------- */}

      {/* Actions */}
      <View style={styles.actionsRow}>
        <Button variant="transparent" textColor="warning" size="sm">
          تقرير <Feather name="file-text" />
        </Button>

        <Button variant="transparent" textColor="danger" size="sm">
          تعديل <Feather name="edit-2" />
        </Button>
           <Button variant="transparent" textColor="danger" size="sm">
        حذف <Feather name="trash-2" />
        </Button>
      </View>
    </View>
  );
}

 const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 15,
    borderWidth: 1,
    borderRadius: 16,
    gap: 12,
  },

  row: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  textColumn: {
    flexDirection: "column",
    gap: 6,
  },

  actionsRow: {
    flexDirection: "row",
    // width: "30%",
    // gap: 10,
  },
});