import StudentCard from '@/components/molecules/StudentCard'
import Header from '@/components/organisms/Header'
import React from 'react'
import { View } from 'react-native'

export default function Students() {
  return (
    <View>
      <Header title='Students' subtitle='Student List Management' btn='Add a Student'/>
   <StudentCard isStudent titleAr='عزير' titleEn='uzair' subtitle='intermediate'  btn1='edit' btn2='delete'></StudentCard>
    </View>
  )
}
