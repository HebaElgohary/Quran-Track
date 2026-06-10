import CustomAlert from '@/components/atoms/CustomAlert'
import Form from '@/components/molecules/form/Form'
import SessionCard from '@/components/molecules/SessionCard'
import Filter from '@/components/organisms/Filter'
import Header from '@/components/organisms/Header'
import NoDataFallback from '@/components/organisms/NoDataFallback'
import NotificationCard from '@/components/organisms/NotificationsCard'
import {  useSession } from '@/hooks/useSession'
import { useStudents } from '@/hooks/useStudent'
import { useToast } from '@/hooks/useToast'
import { SessionFormData, Student } from '@/types/appTypes'
import { Feather } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

type AddDataType= SessionFormData
export default function sessions() {
  const{createSession,sessions,removeSession} =useSession();
 const {students} = useStudents()
 const {showSuccess,showError} = useToast();
 const [selectedSessionId, setSelectedSessionId] = useState<number | null>(null);
 
  
useEffect(() => {
   
console.log('studentsssss',students)
console.log('sessionsssss',sessions)
}, )

//----------- Add handler --------------//
const  addSession = async(formData: AddDataType) => {
    console.log('data inside addsession',formData)
    await createSession(formData);
    showSuccess('تم اضافة الحصة بنجاح');
    
  };

// ----------------------------------//
// alert in case of delte only to make sure he really wants to delete student 
    const openDeleteAlert = (id: number) => {
  setSelectedSessionId(id);
};
// delete student in case of confirm alert //
const confirmDelete = async () => {
  if (selectedSessionId===null) return;
  await removeSession(selectedSessionId);
  showSuccess( 'تم حذف الحصة',
  );
  setSelectedSessionId(null);
};
// -----------------------------//


  return (
    <View style={{direction:'rtl',overflowY:'scroll',height:'100%',paddingVertical:50}} >
      <Header<AddDataType> title='الحصص' 
      subtitle='كل تقارير الحصص' btn='تقرير حصة جديدة' formName='Sessions' handleSubmit={addSession} />
     <Filter      data={ [
        { label: "كل الطلاب", value: "كل الطلاب" },
        { label: "حكيم", value: "حكيم" },
        { label: "محمد", value: "محمد" },
        { label: "عزير", value: "عزير" }, ]} />
   
    {sessions.length === 0 && <NoDataFallback Icon={() => <Feather name="book-open" size={30} color="gray" />}  text='لاتوجد حصص مسجلة ' btn='اضف اول حصة '/> }
{sessions.map((session) => 
<SessionCard
   key={session.id} 
   student={students.find((student) => student.id == session.studentId) as Student}
    time={session.date} 
    surah={session.surah}
    handelDelete={() => openDeleteAlert(session.id)}
     grade={session.grade}   />)} 
{/* {/* <SessionCard nameAr='حكيم' time='10:00' surah='الفاتحة' grade='ممتاز'   /> */}


  {/* // will show alert in case of delete only */}
   <CustomAlert
  show={selectedSessionId !== null}
  title="حذف الحصة"
  message="هل أنت متأكد أنك تريد حذف هذه الحصة"
  confirmText="حذف"
  cancelText="الغاء"
  onCancel={() => setSelectedSessionId(null)}
  onConfirm={confirmDelete}
/>
{/* //-----------------------------// */}
    </View>
  )
}
