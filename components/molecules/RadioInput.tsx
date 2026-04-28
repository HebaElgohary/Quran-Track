import React, { useState } from 'react'
import { View } from 'react-native'
import Title from '../atoms/Title'
import Radio from './Radio'

export default function RadioInput(props:any) {
 const onChange=()=>{
    
 }
    return (
    <View>
      <Title size="md">{props.label}</Title>
      <Radio {...props} />

    </View>
  )
}
