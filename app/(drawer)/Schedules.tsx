import CustomAlert from '@/components/atoms/CustomAlert'
import ScheduleCard from '@/components/molecules/ScheduleCard'
import Header from '@/components/organisms/Header'
import NoDataFallback from '@/components/organisms/NoDataFallback'
import NotificationCard from '@/components/organisms/NotificationsCard'
import { useSchedule } from '@/hooks/useSchedule'
import { useStudents } from '@/hooks/useStudent'
import { useToast } from '@/hooks/useToast'
import { Schedule, ScheduleFormData } from '@/types/appTypes'
import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import { View } from 'react-native'
import * as Notifications from 'expo-notifications'

type AddDataType = ScheduleFormData
export default function Schedules() {
  const { schedules, createSchedule,loading, removeSchedule, editSchedule } = useSchedule();
  const { students } = useStudents();
  const { showSuccess } = useToast()
  const [selectedScheduleId, setSelectedScheduleId] = useState<number | null>(null);
  // --------------- add handler ------------//
  const addSchedule = async (formData: ScheduleFormData) => {
  await createSchedule(formData);

  showSuccess("تم اضافة الموعد بنجاح");
};

// ----------------------------------//

// alert in case of delte only to make sure he really wants to delete student 
    const openDeleteAlert = (id: number) => {
  setSelectedScheduleId(id);
};
// delete student in case of confirm alert //
const confirmDelete = async () => {
  if (selectedScheduleId===null) return;

  const schedule = schedules.find(
  s => s.id === selectedScheduleId
);

if (schedule?.notificationId) {
  await Notifications.cancelScheduledNotificationAsync(
    schedule.notificationId
  );
}

  await removeSchedule(selectedScheduleId);
  showSuccess( 'تم حذف الحصة',
  );
  setSelectedScheduleId(null);
};
// -----------------------------//

  return (
    <View style={{direction:'rtl',overflowY:'scroll',height:'100%',paddingHorizontal:5,paddingVertical:50}} >

  <Header<AddDataType> handleSubmit={addSchedule}  title='المواعيد' subtitle='سينبهك التطبيق بصوت عالى قبل الحصة ب 5 دقائق' btn='اضف موعد جديد' formName='Schedule'/>
      <NotificationCard />
  
  {schedules.length === 0 && !loading && <NoDataFallback handleSubmit={addSchedule} text='لايوجد مواعيد ' btn='اضف اول ميعاد' Icon={()=><Feather name="calendar" size={30} color="gray" /> } />}

<View style={{display:'flex',flexDirection:'column',gap:10,marginTop:50}}>
  {schedules && schedules.map((schedule:Schedule) =><ScheduleCard 
  schedule={schedule}
     student={students.find((student) => student.id == schedule.studentId) }
  duration={schedule.duration}
  key={schedule.id}
  handelUpdate={editSchedule}
  openDeleteAlert={() => openDeleteAlert(schedule.id)} 
  />)}
  </View>

   <CustomAlert
          show={selectedScheduleId !== null}
          title="حذف المجموعة"
          message="هل أنت متأكد أنك تريد حذف هذه المجموعة؟"
          confirmText="حذف"
          cancelText="الغاء"
          onCancel={() => setSelectedScheduleId(null)}
          onConfirm={confirmDelete}
        />
        {/* //-----------------------------// */}
</View>

)
}
