import GroupCard from "@/components/molecules/NoDataFallback";
import GroupsFallback from "@/components/organisms/NoDataFallback";
import Header from "@/components/organisms/Header";
import React from "react";
import { View } from "react-native";
import { getFormFields } from "@/utils/getFormFields";
import FormField from "@/components/molecules/form/FormField";

export default function Groups() {
  return (
    <View>
      <Header
        title="المجموعات"
        subtitle="قسم طلابك لمجموعات وشارك تقاريرهم الشهرية دفعة واحدة  "
        btn="مجموعة جديدة "
      />
      <form action="">

    { getFormFields('Groups')?.map((field)=>
    <FormField {...field}/>

)}
      </form>

    </View>
  );
}
