import StudentCard from '@/components/molecules/StudentCard'
import Header from '@/components/organisms/Header'
import { useStudents } from '@/hooks/useStudent';
import React from 'react'
import { View } from 'react-native'

export default function Students() {
    const { students, addStudent } = useStudents();

  return (
    <View style={{direction:'rtl' }} >
      <Header title='الطلاب ' subtitle='ادارة قائمةالطلاب' btn='اضافة طالب'/>
   {students.map((student) =>
    <StudentCard isStudent titleAr={student.nameAr} titleEn={student.nameEn} subtitle={student.level}  btn1='edit' btn2='delete'></StudentCard>
   )}
    </View>
  )
}
