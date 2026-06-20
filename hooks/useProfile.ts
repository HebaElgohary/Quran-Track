import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "teacher_profile";

type TeacherProfile = {
  nameAr: string;
  nameEn: string;
  password: string;
};


export function useProfile() {
  const [profile, setProfile] = useState<TeacherProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // LOAD
  const loadProfile = async () => {
    try {
      const data = await AsyncStorage.getItem(KEY);
      setProfile(data ? JSON.parse(data) : null);
    } catch (e) {
      console.log(e);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  // SAVE
  const saveProfile = async (newProfile: TeacherProfile) => {
    await AsyncStorage.setItem(KEY, JSON.stringify(newProfile));
    setProfile(newProfile);
  };

  // CHECK PASSWORD
  const checkPassword = (password: string) => {
    return profile?.password === password;
  };

  // CLEAR (logout/reset)
  const clearProfile = async () => {
    await AsyncStorage.removeItem(KEY);
    setProfile(null);
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
    checkPassword,
    clearProfile,
    reload: loadProfile,
    editProfile
  };
}