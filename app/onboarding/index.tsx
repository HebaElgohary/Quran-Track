import FormField from "@/components/molecules/form/FormField";
import { colors } from "@/constants/theme";
import { useProfile } from "@/hooks/useProfile";
import { teacherFields } from "@/schemas/teacherFields";
import { Feather } from "@expo/vector-icons";
import { Redirect } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const { profile, saveProfile } = useProfile();

  const [teacherData, setTeacherData] = useState({
    nameAr: "",
    nameEn: "",
    password: "",
  });

  const handleSave = async () => {
    if (
      !teacherData.nameAr ||
      !teacherData.nameEn ||
      !teacherData.password
    ) {
      return;
    }

    await saveProfile(teacherData);
  };

  if (profile) {
    return <Redirect href="/(drawer)" />;
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Feather
            name="moon"
            color={colors.warning}
            size={40}
          />
        </View>

        <Text style={styles.appName}>
          Quran Track
        </Text>

        <Text style={styles.appDescription}>
          إدارة ومتابعة طلاب القرآن الكريم
        </Text>
      </View>

      {/* Form */}
      <View style={styles.formCard}>
        {teacherFields.map((field) => (
          <FormField
            key={field.name}
            {...field}
            value={
              teacherData[
                field.name as keyof typeof teacherData
              ]
            }
            onChange={(value: string) =>
              setTeacherData((prev) => ({
                ...prev,
                [field.name]: value,
              }))
            }
          />
        ))}

        <TouchableOpacity
          onPress={handleSave}
          activeOpacity={0.8}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            بدء الاستخدام
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    paddingHorizontal: 24,
    justifyContent: "center",
  },

  header: {
    alignItems: "center",
    marginBottom: 32,
  },

  logoContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.btnPrimary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  appName: {
    fontSize: 28,
    fontWeight: "700",
    color: "#111827",
  },

  appDescription: {
    marginTop: 8,
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
  },

  formCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 24,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 5,
    gap: 12,
  },

  button: {
    backgroundColor: colors.btnPrimary,
    paddingVertical: 15,
    borderRadius: 14,
    marginTop: 10,
  },

  buttonText: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
});