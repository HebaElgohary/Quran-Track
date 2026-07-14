import FormField from '@/components/molecules/form/FormField';
import Header from '@/components/organisms/Header'
import { colors } from '@/constants/theme';
import { useProfile } from '@/hooks/useProfile';
import { useToast } from '@/hooks/useToast';
import { teacherFields } from '@/schemas/teacherFields';
import { validateProfile } from '@/utils/validateProfile';
import { Feather } from '@expo/vector-icons';
import { router, useFocusEffect } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Settings() {
 const { profile, editProfile  } = useProfile();


  const [teacherData, setTeacherData] = useState({
    nameAr:  "",
    nameEn:  "",
  });
  useEffect(() => {
  if (profile) {
    setTeacherData({
      nameAr: profile.nameAr ?? "",
      nameEn: profile.nameEn ?? "",
    });
  }
}, [profile]);

  const [errors, setErrors] = useState<{
    nameAr?: string;
    nameEn?: string;
    password?: string;
  }>({});
 const {showSuccess,showError} = useToast()  

  const handleEdit = async () => {
    // validation
    const validationErrors = validateProfile(teacherData);
  
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length > 0) {
        showError("من فضلك تأكد من البيانات");

      return;
    }
  
 try {
  await editProfile(teacherData);
  showSuccess("تم تعديل بياناتك بنجاح");
  router.push("/(drawer)");
} catch (e) {
  showError("حدث خطأ أثناء الحفظ");
}
  };
  
  return (
    <View style={{
      // direction:'rtl' ,
      overflowY:'scroll',height:'100%',paddingVertical:50}} >
      <Header title='الاعدادات' subtitle='تعديل بياناتك الشخصية'/>
  
  
     {/* Form */}
        <View style={styles.formCard}>
          {teacherFields.map((field) => (
            <View key={field.name}>
              <FormField
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
  
              {errors[
                field.name as keyof typeof errors
              ] && (
                <Text style={styles.errorText}>
                  {
                    errors[
                      field.name as keyof typeof errors
                    ]
                  }
                </Text>
              )}
            </View>
          ))}
  
          <TouchableOpacity
            onPress={handleEdit}
            activeOpacity={0.8}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              حفظ <Feather name="save" size={16} /> 
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  )
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

  errorText: {
    color: "red",
    marginTop: 4,
    fontSize: 12,
  },
});