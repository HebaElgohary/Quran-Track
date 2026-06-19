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