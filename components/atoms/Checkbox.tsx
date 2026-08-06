import { colors } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
interface props {
  label: string;
  checked: boolean;
  onChange: () => void;
}
export default function Checkbox({ label, checked, onChange }: props) {
  return (
    <View
      style={{
        marginHorizontal: 0,
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        marginVertical: 6,
      }}
    >
      <View style={{width:'90%',alignItems:'flex-end'}}>
        <Text style={{ fontSize: 16 }}>{label}</Text>
      </View>

      <Pressable onPress={onChange}>
        <View style={{ width: 20,
           height: 20,
            backgroundColor: colors.gray }}>
          {checked && (
            <Ionicons name="checkbox" color={colors.btnPrimary} size={20} />
          )}
        </View>
      </Pressable>
    </View>
  );
}
