import Checkbox from "@/components/atoms/Checkbox";
import HomeCard from "@/components/molecules/HomeCard";
import QuickActions from "@/components/molecules/QuickActions";
import Header from "@/components/organisms/Header";
import React, { useState } from "react";
import { View } from "react-native";

export default function index() {
  const [selected,setSelected]=useState(false)
  return (
    <View className="flex-1 items-center justify-center">
      <Header
        title="الصفحة الرئيسية"
        subtitle="نظرة عامة على حصصك وطلابك "
      ></Header>
      <Checkbox label='name' checked={selected} onChange={()=>setSelected(!selected)} />
      <HomeCard title={"عدد الطلاب"} num={2} icon=""></HomeCard>
      <QuickActions title="اجراءات سريعة" btn1="تقرير حصة جديدة" btn2="ادارة الطلاب" btn3='مواعيد الحصص' btn4='التقارير الشهرية'></QuickActions>
    </View>
  );
}
