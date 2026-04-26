import React from "react";
import { Text, View } from "react-native";
import Button from "../atoms/Button";
import Hr from "../atoms/Hr";

interface StudentCardProps {
  name: string;
  level: string;
  btn1:string;
    btn2:string

}


export default function StudentCard({ name, level, btn1,btn2,}: StudentCardProps) {
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
        {/* first char  and name&level */}
        <View style={{display:'flex',flexDirection:'row' ,gap:'4px' ,alignItems:'center',marginVertical:'5px'}}>
        {/* fist char */}
        <View
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
            {name.charAt(0)}
          </Text>
        </View>
        {/* fist char */}

{/* name & level */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Text>{name}</Text>
          <Text>{level}</Text>
        </View>
{/* name & level */}
</View>

        <Text>{name}</Text>
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
