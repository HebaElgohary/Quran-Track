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
import React, { useEffect } from 'react'
import { View } from 'react-native'

type AddDataType= SessionFormData
export default function sessions() {
  const{createSession,sessions} =useSession();
 const {students} = useStudents()
 const {showSuccess,showError} = useToast();
 
  
useEffect(() => {
   
console.log('studentsssss',students)
console.log('sessionsssss',sessions)


}, )

  const  addSession = async(formData: AddDataType) => {
    console.log('data inside addsession',formData)
    await createSession(formData);
    showSuccess('تم اضافة الحصة بنجاح');
    
  };
  return (
    <View style={{direction:'rtl',overflowY:'scroll',height:'100%',paddingVertical:50}} >
      <Header<AddDataType> title='الحصص' 
      subtitle='كل تقارير الحصص' btn='تقرير حصة جديدة' formName='Sessions' handleSubmit={addSession} />
     <Filter     data={ [
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
     grade={session.grade}   />)} 
{/* {/* <SessionCard nameAr='حكيم' time='10:00' surah='الفاتحة' grade='ممتاز'   /> */}


    </View>
  )
}
