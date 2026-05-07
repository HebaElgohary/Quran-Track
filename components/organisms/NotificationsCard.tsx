import React from "react";
import { Text, View } from "react-native";
import Button from "../atoms/Button";

import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";




export default function NotificationCard(
 ) {
  return (
    <View style={styles.container}>

   <Feather name="bell" size={20} color="gray" />
<Text style={{fontSize:12}}> لتعمل التنبيهات الصوتية، يجب تفعيلها مرة واحدة (تتطلب المتصفحات ذلك). </Text>
<Button>تفعيل وضع التنبيه</Button>
    
    </View>
  );
}

 const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems: "center",
    backgroundColor: '#ec8',
    marginHorizontal: 10,
    padding: 15,
    borderWidth: 1,
    borderRadius: 16,
    gap: 12,
  },

  
});