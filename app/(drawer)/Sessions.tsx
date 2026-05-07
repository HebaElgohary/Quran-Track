import Form from '@/components/molecules/form/Form'
import Filter from '@/components/organisms/Filter'
import Header from '@/components/organisms/Header'
import NoDataFallback from '@/components/organisms/NoDataFallback'
import React from 'react'
import { View } from 'react-native'

export default function sessions() {
  return (
    <View style={{direction:'rtl'}}>
      <Header title='الحصص' subtitle='كل تقارير الحصص' btn='تقرير حصة جديدة' formName='Sessions' />
     <Filter     data={ [
        { label: "كل الطلاب", value: "كل الطلاب" },
        { label: "حكيم", value: "حكيم" },
        { label: "محمد", value: "محمد" },
        { label: "عزير", value: "عزير" }, ]} />
      {/* <Form page='Session' btn1='الغاء' btn2='حفظ التقرير'/> */}
      {/* <NoDataFallback Icon='' text='لاتوجد حصص مسجلة ' btn='اضف اول حصة '/> */}

    </View>
  )
}
