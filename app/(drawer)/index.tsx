
import Header from '@/components/organisms/Header'
import React from 'react'
import { View } from 'react-native'

export default function index() {
  return (
    <View className='flex-1 items-center justify-center'>
    <Header title='Home page' subtitle='Overview of your sessions and students'></Header>     
    </View>
  )
}
