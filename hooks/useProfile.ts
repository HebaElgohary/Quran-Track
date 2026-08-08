import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "teacher_profile";

type TeacherProfile = {
  nameAr: string;
  nameEn: string;
};



export function useProfile() {
  const [profile, setProfile] = useState<TeacherProfile >({ nameAr: "", nameEn: "" });
  const [loading, setLoading] = useState(true);

  // LOAD
   const loadProfile = useCallback(async () => {
    try {
      const data = await AsyncStorage.getItem(KEY);
      setProfile(data ? JSON.parse(data) : { nameAr: "", nameEn: "" });
    } catch (e) {
      console.log(e);
      setProfile({ nameAr: "", nameEn: "" });
    } finally {
      setLoading(false);
    }
  },[])

  // SAVE
  const saveProfile = async (newProfile: TeacherProfile) => {
    await AsyncStorage.setItem(KEY, JSON.stringify(newProfile));
    setProfile(newProfile);
  };

  // CHECK PASSWORD
  // const checkPassword = (password: string) => {
  //   return profile?.password === password;
  // };

  // CLEAR (logout/reset)
  const clearProfile = async () => {
    await AsyncStorage.removeItem(KEY);
    setProfile({ nameAr: "", nameEn: "" });
  };

  const editProfile = async (newProfile: TeacherProfile) => {
    await AsyncStorage.setItem(KEY, JSON.stringify(newProfile));
    setProfile(newProfile);
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return {
    profile,
    loading,
    saveProfile,
    // checkPassword,
    clearProfile,
     loadProfile,
    editProfile

  };
}