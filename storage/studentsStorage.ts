import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'students';

export const getStudents = async () => {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

export const saveStudents = async (students: any[]) => {
  await AsyncStorage.setItem(KEY, JSON.stringify(students));
};