import Header from "@/components/organisms/Header";
import NoDataFallback from "@/components/organisms/NoDataFallback";
import NotificationCard from "@/components/organisms/NotificationsCard";

import { Feather } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

export default function Groups() {
  const groups = [];
  return (
    <View style={{ direction: "rtl" }}>
      <Header
        formName="Groups"
        title="المجموعات"
        subtitle="قسم طلابك لمجموعات وشارك تقاريرهم الشهرية دفعة واحدة  "
        btn="مجموعة جديدة "
      />
      {groups.length === 0 && (
        <NoDataFallback
          Icon={() => <Feather name="folder-minus" size={30} color="gray" />}
          text="لاتوجد مجموعات مسجلة "
          btn="اضف اول مجموعة "
        />
      )}
    </View>
  );
}
