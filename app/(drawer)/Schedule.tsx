import ScheduleForm from '@/components/molecules/ScheduleForm'
import Header from '@/components/organisms/Header'
import NoDataFallback from '@/components/organisms/NoDataFallback'
import React from 'react'
import { View } from 'react-native'

export default function Schedule() {
  return (
<View style={{direction:'rtl',gap:3}}>

  <Header title='المواعيد' subtitle='سينبهك التطبيق بصوت عالى قبل الحصة ب 5 دقائق' btn='اضف موعد جديد' />
  {/* <NoDataFallback text='لايوجد مواعيد ' btn='اضف اول ميعاد' icon='' /> */}
  <ScheduleForm />
</View>

)
}
