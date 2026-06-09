import Form from '@/components/molecules/form/Form'
import SessionCard from '@/components/molecules/SessionCard'
import Filter from '@/components/organisms/Filter'
import Header from '@/components/organisms/Header'
import NoDataFallback from '@/components/organisms/NoDataFallback'
import NotificationCard from '@/components/organisms/NotificationsCard'
import { Session } from '@/types/appTypes'
import { Feather } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'

type AddDataType= Session
export default function sessions() {
  const sessions = [];
  return (
    <View style={{direction:'rtl',overflowY:'scroll',height:'100%',paddingVertical:50}} >
      <Header<AddDataType> title='الحصص' subtitle='كل تقارير الحصص' btn='تقرير حصة جديدة' formName='Sessions' />
     <Filter     data={ [
        { label: "كل الطلاب", value: "كل الطلاب" },
        { label: "حكيم", value: "حكيم" },
        { label: "محمد", value: "محمد" },
        { label: "عزير", value: "عزير" }, ]} />
   
    {sessions.length === 0 && <NoDataFallback Icon={() => <Feather name="book-open" size={30} color="gray" />}  text='لاتوجد حصص مسجلة ' btn='اضف اول حصة '/> }
<SessionCard nameAr='حكيم' time='10:00' surah='الفاتحة' grade='ممتاز'   />


    </View>
  )
}
