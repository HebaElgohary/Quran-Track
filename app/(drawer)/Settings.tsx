import Header from '@/components/organisms/Header'
import React from 'react'
import { View } from 'react-native'

export default function Settings() {
  return (
    <View style={{direction:'rtl',overflowY:'scroll',height:'100%',paddingVertical:50}} >
      <Header title='الاعدادات' subtitle=''/>
    </View>
  )
}
