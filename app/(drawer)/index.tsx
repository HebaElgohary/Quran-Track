import HomeCard from "@/components/molecules/HomeCard";
import QuickActions from "@/components/molecules/QuickActions";
import Header from "@/components/organisms/Header";
import React from "react";
import { View } from "react-native";

export default function index() {
  return (
    <View
      style={{ direction: "rtl" }}
    >
      <Header
        title="الصفحة الرئيسية"
        subtitle="نظرة عامة على حصصك وطلابك "
      ></Header>

      <HomeCard title={"عدد الطلاب"} num={2} icon=""></HomeCard>
      <QuickActions
        title="اجراءات سريعة"
        btn1="تقرير حصة جديدة"
        btn2="ادارة الطلاب"
        btn3="مواعيد الحصص"
        btn4="التقارير الشهرية"
      ></QuickActions>
    </View>
  );
}
