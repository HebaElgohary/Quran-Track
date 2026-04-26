import { btnSize, colors } from "@/constants/theme";
import { Pressable, Text } from "react-native";

type Props = {
  variant?: "primary" | "danger" | "transparent"|'btnPrimary';
  size?:'sm'|'md'|'lg'
  textColor?:'danger'|'warning'|'secondary'
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function Button({
  children,
  size='md',
  variant = "primary",
  textColor='secondary',
  onClick,
}: Props) {
  return (
    <Pressable onPress={onClick} >
      <Text
        style={{
          color: colors[textColor],
          backgroundColor: colors[variant],
          padding: 6,
          width: btnSize[size],
          textAlign: "center",
          fontSize:12,
          borderRadius: 6,
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
}
