import { colors } from "@/constants/theme";
import { Pressable, Text } from "react-native";

type Props = {
  variant?: "primary" | "danger";
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, variant = "primary", onClick }: Props) {
 
  return (
    <Pressable  onPress={onClick}>
      <Text  style={{color: colors['secondary'], backgroundColor: colors['btnPrimary'], padding: 10,width: 120, textAlign: 'center', borderRadius: 6, }}>
        {children}
      </Text>
    </Pressable>
  );
}