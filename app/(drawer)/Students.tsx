import StudentCard from '@/components/molecules/StudentCard'
import Header from '@/components/organisms/Header'
import NoDataFallback from '@/components/organisms/NoDataFallback';
import { useStudents } from '@/hooks/useStudent';
import { Feather } from '@expo/vector-icons';
import React from 'react'
import { View } from 'react-native'

export default function Students() {
    const { students, addStudent } = useStudents();
  const handleAdd = async (data: any) => {
    await addStudent(data);
    alert('تم الاضافة بنجاح');
  };
    return (
    <View style={{direction:'rtl' }} >
      <Header title='الطلاب '
       subtitle='ادارة قائمةالطلاب' 
       handleSubmit={handleAdd}
       btn='اضافة طالب'
      formName='Students'/>
      {students.length === 0 && <View style={{marginTop:20}}>
        <NoDataFallback text='لايوجد طلاب مسجلين' btn='اضافة اول طالب' Icon={() => <Feather name="users" size={30} color="gray" />}  />
        </View>}
   {students.map((student) =>
    <StudentCard key={student.id} isStudent titleAr={student.nameAr} titleEn={student.nameEn} subtitle={student.level}  btn1='edit' btn2='delete'></StudentCard>
   )}
    </View>
  )
}
