import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Title from '../atoms/Title';
import Select from './Select';
import Subtitle from '../atoms/Subtitle';

export default function SelectInput({label,data}:{label?:string,data:any}) {

  return (
    <View style={{gap:4,marginVertical:10}} >
     {label && <Title size='md' variant='btnPrimary'>{label}</Title>}
      <Select data={data} />

    </View>
  )
}
