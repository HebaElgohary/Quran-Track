import { btnSize, colors } from "@/constants/theme";
import { ComponentType, ReactNode } from "react";
import { Pressable, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
  variant?: "primary" | "danger" | "transparent"|'btnPrimary'|'gray';
  size?:'sm'|'md'|'lg'
  textColor?:'danger'|'warning'|'secondary'|'black'|'white'
  children?: React.ReactNode;
  onClick?: () => void;
    name?:string
};

export default function Button({
  children,
  size='md',
  variant = "btnPrimary",
  textColor='secondary',
  onClick,
  name,

}: Props) {
  return (
    <Pressable onPress={onClick}  >
      <Text
        style={{
         
          color: colors[textColor],
          fontWeight:'bold',
          backgroundColor: colors[variant],
          padding: 7,
          width: btnSize[size],
          textAlign: "center",
          paddingVertical:12,
          fontSize:12,
          borderRadius: 6,
          display:'flex',justifyContent:'space-around',alignItems:'center',
        }}
      >
        {children}
        {name&&<Feather  name={name}/>}
      </Text>
    </Pressable>
  );
}
