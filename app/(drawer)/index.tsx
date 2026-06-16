import HomeCard from "@/components/molecules/HomeCard";
import QuickActions from "@/components/molecules/QuickActions";
import Header from "@/components/organisms/Header";
import { useStudents } from "@/hooks/useStudent";
import { router } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function index() {
const {students} = useStudents();
  return (
    <View style={{ direction: "rtl" ,padding:5}}>
      <Header
        title="الصفحة الرئيسية"
        subtitle="نظرة عامة على حصصك وطلابك "
      ></Header>
      {/* cards */}
     <View style={{display:'flex',gap:10}}>

      <HomeCard title={"عدد الطلاب"} num={students.length} icon="users"></HomeCard>
      <HomeCard title={" حصص اليوم"} num={0} icon="calendar"></HomeCard>
      <HomeCard title={" حصص هذا الشهر "} num={3} icon="file-text"></HomeCard>
      <HomeCard title={" اجمالى الحصص"} num={5} icon="book-open"></HomeCard>
</View>
{/* //////////////// */}
      <QuickActions
        title="اجراءات سريعة"
        btn1="تقرير حصة جديدة"
        btn2="ادارة الطلاب"
        btn3="مواعيد الحصص"
        btn4="التقارير الشهرية"
        onPressBtn1={() => {
          router.push('/(drawer)/Sessions')
        }}
        onPressBtn2={() => {
          router.push('/(drawer)/Students')
        }}

        onPressBtn3={() => {
          router.push('/(drawer)/Schedules')
        }}
        onPressBtn4={() => {
          router.push('/(drawer)/MonthlyReports')
        }}
      ></QuickActions>
    </View>
  );
}
