import React from 'react'
import { Text, View } from 'react-native'
import SelectInput from '../molecules/SelectInput'

export default function Filter({data}:{data?:any[]}) {
  return (
    <View style={{display:'flex',flexDirection:'row',gap:20,marginVertical:20,alignItems:'center'}}>
        <View >
            <Text style={{fontSize:20}}>تصفية حسب الطلاب</Text>
        </View>
        <View className='' >
           <SelectInput  data={data}   />
        </View>
    </View>
  )
}
  
     
 