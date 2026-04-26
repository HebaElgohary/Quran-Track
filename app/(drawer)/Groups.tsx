import GroupCard from "@/components/molecules/GroupCard";
import StudentCard from "@/components/molecules/StudentCard";
import Header from "@/components/organisms/Header";
import React from "react";
import { View } from "react-native";

export default function Groups() {
  return (
    <View>
      <Header
        title="Groups"
        subtitle="separate your students into groups and share their monthly reports in one time "
        btn="Add a Group"
      />
      <GroupCard titleAr="بداية" titleEn="Bedaya" subtitle="3 طلاب " btn1="تقرير المجموعة " btn2="edit"/>
    </View>
  );
}
