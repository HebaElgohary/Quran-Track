import Header from '@/components/organisms/Header'
import NoDataFallback from '@/components/organisms/NoDataFallback'
import NotificationCard from '@/components/organisms/NotificationsCard'
import { Feather } from '@expo/vector-icons'
import { View } from 'react-native'


export default function Schedule() {
  const schedule = [];
  return (
    <View style={{direction:'rtl',overflowY:'scroll',height:'100%',paddingVertical:50}} >

  <Header title='المواعيد' subtitle='سينبهك التطبيق بصوت عالى قبل الحصة ب 5 دقائق' btn='اضف موعد جديد' formName='Schedule'/>
      <NotificationCard />
  
  {schedule.length === 0 && <NoDataFallback text='لايوجد مواعيد ' btn='اضف اول ميعاد' Icon={()=><Feather name="calendar" size={30} color="gray" /> } />}
</View>

)
}
