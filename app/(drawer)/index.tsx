import Checkbox from "@/components/atoms/Checkbox";
import HomeCard from "@/components/molecules/HomeCard";
import QuickActions from "@/components/molecules/QuickActions";
import Header from "@/components/organisms/Header";
import React, { useState } from "react";
import { View } from "react-native";

export default function index() {
  const [items, setItems] = useState([
    {
      id: 0, label: "heba",checked:false
    },
    { id: 1, label: "ahmed" ,checked:false},
    { id: 2, label: "youmna",checked:false },
  ]);
  return (
    <View className="flex-1 items-center justify-center">
      <Header
        title="الصفحة الرئيسية"
        subtitle="نظرة عامة على حصصك وطلابك "
      ></Header>
     {items.map((item)=> <Checkbox key={item.id}
        label={item.label}
        checked={item.checked}
        onChange={() => {
          const arr=items.map((i)=>{
           return i!=item?i:{...i,checked:!i.checked}
             
            })
          setItems(arr )   
        }}
      />)}
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
