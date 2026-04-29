import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Title from '../atoms/Title';
import Select from './Select';
import Subtitle from '../atoms/Subtitle';

export default function SelectInput({label,data}:any) {

  return (
    <View style={{gap:4,}} >
      <Text >{label}</Text>
      <Select data={data} />

    </View>
  )
}
