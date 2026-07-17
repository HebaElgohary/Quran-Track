import { btnSize, colors } from "@/constants/theme";
import { Pressable, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
  disabled?: boolean;
  variant?:
    | "primary"
    | "danger"
    | "transparent"
    | "btnPrimary"
    | "gray";
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  textColor?:
    | "danger"
    | "warning"
    | "secondary"
    | "black"
    | "white"
    | "primary";
  children?: React.ReactNode;
  onClick?: () => void;
  name?: string;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Button({
  children,
  disabled,
  size = "md",
  variant = "btnPrimary",
  textColor = "secondary",
  onClick,
  name,
}: Props) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onClick}
      style={({ pressed }) => ({
        transform: [{ scale: pressed ? 0.97 : 1 }],
        opacity: disabled ? 0.55 : 1,
      })}
    >
      <View
        style={{
          backgroundColor: colors[variant],
          width: btnSize[size],
          minHeight: 48,

          paddingHorizontal: 16,
          paddingVertical: 12,

          borderRadius: 12,
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,

          elevation: 4,

          shadowColor: "#000",
          shadowOpacity: 0.15,
          shadowRadius: 6,
          shadowOffset: {
            width: 0,
            height: 3,
          },
        }}
      >
        {name && (
          <Feather
            name={name as any}
          
            size={18}
            color={colors[textColor]}
          />
        )}

        <Text
          style={{
            color: colors[textColor],
            fontWeight: "700",
            fontSize: 15,
            textAlign: "center",
          }}
        >
          {children}
        </Text>
      </View>
    </Pressable>
  );
}