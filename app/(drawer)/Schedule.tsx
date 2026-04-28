import Header from '@/components/organisms/Header'
import NoDataFallback from '@/components/organisms/NoDataFallback'
import React from 'react'
import { View } from 'react-native'

export default function Schedule() {
  return (
<View style={{direction:'rtl'}}>

  <Header title='المواعيد' subtitle='' />
  <NoDataFallback text='لايوجد مواعيد ' btn='اضف اول ميعاد' icon='' />
</View>

)
}
