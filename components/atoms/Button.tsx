import { colors } from "@/constants/theme";
import { Pressable, Text } from "react-native";

type Props = {
  variant?: "primary" | "danger" | "transparent";
  textColor?:'danger'|'warning'|'secondary'
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  textColor='secondary',
  onClick,
}: Props) {
  return (
    <Pressable onPress={onClick}>
      <Text
        style={{
          color: colors[textColor],
          backgroundColor: colors[variant],
          padding: 10,
          width: 120,
          textAlign: "center",
          borderRadius: 6,
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
}
