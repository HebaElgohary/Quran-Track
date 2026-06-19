import { useProfile } from "@/hooks/useProfile";
import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import FormField from "@/components/molecules/form/FormField";

export default function Index() {
  const { profile, saveProfile } = useProfile();

  const [nameAr, setNameAr] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = async () => {
    if (!nameAr || !nameEn || !password) return;

    await saveProfile({
      nameAr,
      nameEn,
      password,
    });
  };

  if (profile) {
    return (
      <View>
        <Text>Welcome {profile.nameAr}</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20, gap: 12 }}>

      {/* Arabic Name */}
      <FormField
        label="اسم المعلم (عربي)"
        value={nameAr}
        onChangeText={setNameAr}
      />

      {/* English Name */}
      <FormField
        label="Teacher Name (English)"
        value={nameEn}
        onChangeText={setNameEn}
      />

      {/* Password */}
      <FormField
        label="كلمة المرور"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Save Button */}
      <Pressable
        onPress={handleSave}
        style={{
          backgroundColor: "#000",
          padding: 14,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          بدء الاستخدام
        </Text>
      </Pressable>

    </View>
  );
}