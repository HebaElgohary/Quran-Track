import StudentCard from '@/components/molecules/StudentCard'
import Header from '@/components/organisms/Header'
import NoDataFallback from '@/components/organisms/NoDataFallback';
import { useStudents } from '@/hooks/useStudent';
import { Student } from '@/types/appTypes';
import { Feather } from '@expo/vector-icons';
import React from 'react'
import { View } from 'react-native'

type AddDataType= Student


export default function Students() {
    const { students, createStudent, editStudent, removeStudent } = useStudents();
  const handleAdd: (data: AddDataType)  => Promise<void> = async (data: AddDataType) => {
    await createStudent(data);
    alert('تم الاضافة بنجاح');
  };
  const handleDelete = async (id: number) => {
    await removeStudent(id);
    alert('تم الحذف بنجاح');
  }
    return (
    <View style={{direction:'rtl' }} >
      <Header<AddDataType>
       title='الطلاب '
       subtitle='ادارة قائمةالطلاب' 
       handleSubmit={handleAdd}
       btn='اضافة طالب'
      formName='Students'/>
      {students.length === 0 && <View style={{marginTop:20}}>
        <NoDataFallback 
        text='لايوجد طلاب مسجلين' 
        btn='اضافة اول طالب'
         Icon={() => <Feather name="users" size={30} color="gray" />}  />
        </View>}
  <View style={{gap:10}}>
   {students.map((student) =>
    <StudentCard key={student.id} updateStudent={editStudent} handleDelete={handleDelete} isStudent student={student} btn1='edit' btn2='delete'></StudentCard>
   )}
   </View>
    </View>
  )
}
