import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Title from '../atoms/Title';
import Select from './Select';
import Subtitle from '../atoms/Subtitle';
import { colors } from '@/constants/theme';

export default function SelectInput({label,data}:{label?:string,data:any}) {

  return (
    <View style={{gap:7,marginVertical:10 ,display:'flex'}} >
     {label && <Text style={{
         fontSize: 18,
         marginBottom: 4,
         marginHorizontal: 8,
         color: colors.btnPrimary,
         fontWeight: "500",
     
       }}>{label}</Text>}
      <Select data={data} />

    </View>
  )
}
