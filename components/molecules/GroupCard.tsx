import React from "react";
import { Text, View } from "react-native";
import Button from "../atoms/Button";
import Hr from "../atoms/Hr";
import Title from "../atoms/Title";
import { GroupFormData } from "@/types/appTypes";

interface GroupCardProps {
 group:GroupFormData;
  btn1:string;
    btn2:string;
    btn3:string


}


export default function GroupCard({ group, btn1,btn2,btn3}: GroupCardProps) {
  const studentCount = group.students ? group.students.length : 0;
  return (
    <View
      style={{
        backgroundColor: "white",
        marginHorizontal: 10,
        padding: 15,
        borderRadius: 10,
        display:'flex',
          justifyContent: "space-around",

      }}
    >
        {/* first row */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent:'space-between'
        }}
      >
        {/* first char  and titleAr&subtitle */}
        <View style={{display:'flex',flexDirection:'row' ,gap:4 ,alignItems:'center',marginVertical:5}}>
   

{/* titleAr & subtitle */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            marginVertical:7
          }}
        >
          <Title >{group.nameAr}</Title>
          <Text>{studentCount} طالب</Text>
        </View>
{/* titleAr & subtitle */}
</View>

        <Text>{group.nameEn}</Text>
      </View>
        {/* first row */}
<Hr ></Hr>
        {/* second row */}
<View style={{display:'flex' ,flexDirection:'row',gap:'3px' ,marginVertical:10}}>

    <Button variant="btnPrimary" textColor="secondary" size="lg">{btn1}</Button>
    <Button variant="transparent" textColor="danger">{btn2}</Button>
    <Button variant="transparent" textColor="danger">{btn3}</Button>

</View>
        {/* second row */}


    </View>
  );
}
