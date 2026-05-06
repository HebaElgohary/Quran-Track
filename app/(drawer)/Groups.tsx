
import Header from "@/components/organisms/Header";
import React from "react";
import { View } from "react-native";

export default function Groups() {

  return (
    <View style={{direction:'rtl'}}>
      <Header
      formName="Groups"
        title="المجموعات"
        subtitle="قسم طلابك لمجموعات وشارك تقاريرهم الشهرية دفعة واحدة  "
        btn="مجموعة جديدة "
      />
  

    </View>
  );
}
