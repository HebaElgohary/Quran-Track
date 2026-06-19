import AsyncStorage from "@react-native-async-storage/async-storage";


const KEY = "teacher_profile";

//add teacher profile //
//-------------------//
export const saveTeacherProfile = async (profile: TeacherProfile) => {
  await AsyncStorage.setItem(
    KEY,
    JSON.stringify(profile)
  );
};

//---------------------------//

//check teacher password//
//----------------------//
export const checkTeacherPassword = async (password: string) => {
  const data = await AsyncStorage.getItem("teacher_profile");

  if (!data) return false;

  const profile = JSON.parse(data);

  return profile.password === password;
};
//----------------------//