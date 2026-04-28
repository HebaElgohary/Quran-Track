import Header from '@/components/organisms/Header'
import NoDataFallback from '@/components/organisms/NoDataFallback'
import React from 'react'
import { View } from 'react-native'

export default function sessions() {
  return (
    <View style={{direction:'rtl'}}>
      <Header title='الحصص' subtitle='كل تقارير الحصص' />
      <NoDataFallback Icon='' text='لاتوجد حصص مسجلة ' btn='اضف اول حصة '/>

    </View>
  )
}
