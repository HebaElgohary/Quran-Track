import Header from '@/components/organisms/Header'
import NoDataFallback from '@/components/organisms/NoDataFallback'
import NotificationCard from '@/components/organisms/NotificationsCard'
import { useSchedule } from '@/hooks/useSchedule'
import { useToast } from '@/hooks/useToast'
import { Schedule, ScheduleFormData } from '@/types/appTypes'
import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import { View } from 'react-native'

type AddDataType = ScheduleFormData
export default function Schedule() {
  const { schedules, createSchedule, removeSchedule } = useSchedule();
  const { showSuccess } = useToast()
  const [selectedScheduleId, setSelectedScheduleId] = useState<number | null>(null);
  // --------------- add handler ------------//
  const addSchedule = async(formData: AddDataType) => {
    console.log('data inside addsession',formData)
    await createSchedule(formData);
    showSuccess('تم اضافة الحصة بنجاح');
    
  };

// ----------------------------------//

// alert in case of delte only to make sure he really wants to delete student 
    const openDeleteAlert = (id: number) => {
  setSelectedScheduleId(id);
};
// delete student in case of confirm alert //
const confirmDelete = async () => {
  if (selectedScheduleId===null) return;
  await removeSchedule(selectedScheduleId);
  showSuccess( 'تم حذف الحصة',
  );
  setSelectedSessionId(null);
};
// -----------------------------//


  };
  return (
    <View style={{direction:'rtl',overflowY:'scroll',height:'100%',paddingVertical:50}} >

  <Header title='المواعيد' subtitle='سينبهك التطبيق بصوت عالى قبل الحصة ب 5 دقائق' btn='اضف موعد جديد' formName='Schedule'/>
      <NotificationCard />
  
  {schedule.length === 0 && <NoDataFallback text='لايوجد مواعيد ' btn='اضف اول ميعاد' Icon={()=><Feather name="calendar" size={30} color="gray" /> } />}
</View>

)
}
