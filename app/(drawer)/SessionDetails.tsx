import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { useSession } from "@/hooks/useSession";

export default function SessionDetails() {
  const { id } = useLocalSearchParams();

  const { sessions } = useSession();

  const session = sessions.find(
    (s) => s.id === Number(id)
  );

  if (!session) {
    return <Text>الجلسة غير موجودة</Text>;
  }

  return (
    <View>
      <Text>{session.surah}</Text>
    </View>
  );
}