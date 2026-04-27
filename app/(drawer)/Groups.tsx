import GroupCard from "@/components/molecules/NoDataFallback";
import GroupsFallback from "@/components/organisms/NoDataFallback";
import Header from "@/components/organisms/Header";
import React from "react";
import { View } from "react-native";

export default function Groups() {
  return (
    <View>
      <Header
        title="المجموعات"
        subtitle="قسم طلابك لمجموعات وشارك تقاريرهم الشهرية دفعة واحدة  "
        btn="مجموعة جديدة "
      />
    {/* <GroupCard titleAr="بداية" titleEn="Bedaya" subtitle="3 طلاب " btn1="تقرير المجموعة " btn2="edit" btn3="del"/> */}
    </View>
  );
}
