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
  onPress={onClick}
  disabled={disabled}
>
  {({ pressed }) => (
    <View
      style={{
        backgroundColor:
          pressed
            ? colors[`${variant}Pressed` as keyof typeof colors] ??
              colors[variant]
            : colors[variant],

        width: btnSize[size],
        minHeight: 48,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,

        transform: [{ scale: pressed ? 0.96 : 1 }],
        opacity: disabled ? 0.55 : 1,

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
  )}
</Pressable>
  );
}