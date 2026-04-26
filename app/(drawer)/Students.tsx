import Header from '@/components/organisms/Header'
import React from 'react'
import { View } from 'react-native'

export default function students() {
  return (
    <View>
      <Header title='Students' subtitle='Student List Management' btn='Add a Student'/>
    </View>
  )
}
