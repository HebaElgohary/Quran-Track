import { btnSize, colors } from "@/constants/theme";
import { Pressable, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
type Props = {
  disabled?:boolean
  variant?: "primary" | "danger" | "transparent"|'btnPrimary'|'gray';
  size?:'sm'|'md'|'lg'|'xl'|'xxl';
  textColor?:'danger'|'warning'|'secondary'|'black'|'white'|'primary';
  children?: React.ReactNode;
  onClick?: () => void;
    name?:string
    setOpen?:React.Dispatch<React.SetStateAction<boolean>>
};

export default function Button({
  children,
  disabled,
  size='md',
  variant = "btnPrimary",
  textColor='secondary',
  onClick,
  name,
  setOpen
}: Props) {
 return (
  <Pressable onPress={onClick} disabled={disabled}  >
    <View
      style={{
        backgroundColor: colors[variant],
        paddingVertical: 12,
        padding: 9,
        width: btnSize[size],
        borderRadius: 6,
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
       style={{ color: colors[textColor], fontWeight: "bold", fontSize: 10 }}>
        {children}
      </Text>

      {name && <Feather name={name as any}  color={colors[textColor]} size={14} />}
    </View>
  </Pressable>
);
}
