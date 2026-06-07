import React from 'react'
import { Text, View } from 'react-native'
import Select from './Select';
import { colors } from '@/constants/theme';

export default function SelectInput({label,value,onChange,data}:{value?:string,onChange?:any,label?:string,data:any}) {
  console.log("SELECT INPUT DATA", data);

  return (
    <View style={{gap:7,marginVertical:10 ,display:'flex'}} >
     {label && <Text style={{
         fontSize: 18,
         marginBottom: 4,
         marginHorizontal: 8,
         color: colors.btnPrimary,
         fontWeight: "500",
     
       }}>{label}</Text>}
      <Select data={data} value={value} onChange={onChange} />

    </View>
  )
}
