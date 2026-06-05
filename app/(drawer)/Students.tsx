import CustomAlert from '@/components/atoms/CustomAlert';
import StudentCard from '@/components/molecules/StudentCard'
import Header from '@/components/organisms/Header'
import NoDataFallback from '@/components/organisms/NoDataFallback';
import { useStudents } from '@/hooks/useStudent';
import { useToast } from '@/hooks/useToast';
import { Student } from '@/types/appTypes';
import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react'
import { View } from 'react-native'


type AddDataType= Student


export default function Students() {
    const { students, createStudent, editStudent, removeStudent } = useStudents();
const [selectedStudentId, setSelectedStudentId] = useState<number | null>(null);
const {showSuccess,showError} = useToast();
// alert in case of delte only to make sure he really wants to delete student 
    const openDeleteAlert = (id: number) => {
  setSelectedStudentId(id);
};
// delete student in case of confirm alert //
const confirmDelete = async () => {
  if (selectedStudentId===null) return;
  await removeStudent(selectedStudentId);
  showSuccess( 'تم حذف الطالب',
  );
  setSelectedStudentId(null);
};
// -----------------------------//
  const handleAdd: (data: AddDataType)  => Promise<void> = async (data: AddDataType) => {
    await createStudent(data);
    showSuccess( 'تم إضافة الطالب بنجاح',
  );
  };

    return (
    <View style={{direction:'rtl',overflowY:'scroll',height:'100%',paddingVertical:50}} >
      <Header<AddDataType>
       title='الطلاب '
       subtitle='ادارة قائمةالطلاب' 
       handleSubmit={handleAdd}
       btn='اضافة طالب'
      formName='Students'/>
      {students.length === 0 && <View style={{marginTop:20}}>
        <NoDataFallback 
        formName='Students'
        handleSubmit={handleAdd}
        
        text='لايوجد طلاب مسجلين' 
        btn='اضافة اول طالب'
         Icon={() => <Feather name="users" size={30} color="gray" />}  />
        </View>}
  <View style={{gap:10}}>
   {students.map((student) =>
    <StudentCard key={student.id}
     updateStudent={editStudent}
      handleDelete={openDeleteAlert} 
      isStudent 
      student={student} 
      btn1='edit' btn2='delete'></StudentCard>
   )}
   </View>
   {/* // will show alert in case of delete only */}
   <CustomAlert
  show={selectedStudentId !== null}
  title="حذف الطالب"
  message="هل أنت متأكد أنك تريد حذف هذا الطالب؟"
  confirmText="حذف"
  cancelText="الغاء"
  onCancel={() => setSelectedStudentId(null)}
  onConfirm={confirmDelete}
/>
{/* //-----------------------------// */}
    </View>
  )
}
