import { colors } from '@/constants/theme'
import { Feather } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'

export default function FormHeading({title,name}) {
  return (
  <View  style={{backgroundColor:'white',padding:15}}>
       <View style={{display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
        <Text style={{textAlign:'left' ,fontSize:20,color:colors.btnPrimary}}>{title}</Text>
       <Feather name={name} size={20}/>
       </View>
       </View>
       )
}
