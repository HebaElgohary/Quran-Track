import Button from '@/components/atoms/Button'
import Hr from '@/components/atoms/Hr'
import Subtitle from '@/components/atoms/Subtitle'
import Title from '@/components/atoms/Title'
import Heading from '@/components/molecules/Heading'
import React from 'react'
import { View } from 'react-native'

export default function index() {
  return (
    <View className='flex-1 items-center justify-center'>
    <Heading title='Home page' subtitle='Overview of your sessions and students'></Heading>     
    </View>
  )
}
