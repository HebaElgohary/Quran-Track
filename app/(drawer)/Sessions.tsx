import Form from '@/components/molecules/form/Form'
import Header from '@/components/organisms/Header'
import NoDataFallback from '@/components/organisms/NoDataFallback'
import React from 'react'
import { View } from 'react-native'

export default function sessions() {
  return (
    <View style={{direction:'rtl'}}>
      <Header title='الحصص' subtitle='كل تقارير الحصص' btn='تقرير حصة جديدة' formName='Sessions' />
      {/* <Form page='Session' btn1='الغاء' btn2='حفظ التقرير'/> */}
      {/* <NoDataFallback Icon='' text='لاتوجد حصص مسجلة ' btn='اضف اول حصة '/> */}

    </View>
  )
}
