import React from "react";
import { Text, View } from "react-native";
import Button from "../atoms/Button";
import Hr from "../atoms/Hr";
import Title from "../atoms/Title";
import { Feather } from "@expo/vector-icons";

interface StudentCardProps {
    isStudent:boolean
  titleAr: string;
  titleEn:string
  subtitle: string;
  btn1:string;
    btn2:string

}


export default function StudentCard({ titleAr,titleEn, subtitle, btn1,btn2,isStudent}: StudentCardProps) {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginHorizontal: 10,
        padding: 15,
        borderWidth:1,
        borderRadius: 20,
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
        <View style={{display:'flex',flexDirection:'row' ,gap:'4px' ,alignItems:'center',marginVertical:'5px'}}>
        {/* fist char */}
       {isStudent && <View
          style={{
            backgroundColor: "#eeee",
            width: 50,
            height: 50,
            borderRadius: "100%",
          }}
        >
          <Text
            style={{
              fontSize: "30px",
              textAlign: "center",
              fontWeight: "semibold",
            }}
          >
            {titleAr.charAt(0)}
          </Text>
        </View>
}
        {/* fist char */}

{/* titleAr & subtitle */}
        <View
          style={{
            display: "flex",
            gap:15,
            flexDirection: "column",
          }}
        >
          <Title variant="btnPrimary" size="xl">{titleAr}</Title>
          <Title size="sm" >{subtitle}</Title>
        </View>
{/* titleAr & subtitle */}
</View >

        <Title >{titleEn}</Title>
      </View>
        {/* first row */}
<Hr ></Hr>
        {/* second row */}
<View style={{display:'flex' ,flexDirection:'row',gap:'3px'}}>

    <Button variant="transparent" textColor="warning">{btn1} <Feather name="edit-2" /></Button>
    <Button variant="transparent" textColor="danger">{btn2}  <Feather name="trash-2"/>  </Button>

</View>
        {/* second row */}


    </View>
  );
}
