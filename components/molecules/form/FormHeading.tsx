import { colors } from '@/constants/theme'
import { Feather } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'
interface props {
    title:string,
    name:string
}
export default function FormHeading({title,name}:props) {
  return (
  <View  style={{backgroundColor:'white',marginVertical:5}}>
       <View style={{display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
        <Text style={{textAlign:'left' ,fontSize:22,color:colors.btnPrimary}}>{title}</Text>
       <Feather name={name} size={20}/>
       </View>
       </View>
       )
}
