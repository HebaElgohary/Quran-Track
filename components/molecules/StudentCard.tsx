import React from "react";
import { Text, View } from "react-native";
import Button from "../atoms/Button";
import Hr from "../atoms/Hr";
import Title from "../atoms/Title";

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
        marginHorizontal: "10px",
        padding: "15px",
        borderRaduis: "10px",
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
            backgroundColor: "gray",
            width: "45px",
            height: "45px",
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
            gap:5,
            flexDirection: "column",
          }}
        >
          <Title>{titleAr}</Title>
          <Text>{subtitle}</Text>
        </View>
{/* titleAr & subtitle */}
</View>

        <Text>{titleEn}</Text>
      </View>
        {/* first row */}
<Hr ></Hr>
        {/* second row */}
<View style={{display:'flex' ,flexDirection:'row',gap:'3px'}}>

    <Button variant="transparent" textColor="warning">{btn1}</Button>
    <Button variant="transparent" textColor="danger">{btn2}</Button>

</View>
        {/* second row */}


    </View>
  );
}
