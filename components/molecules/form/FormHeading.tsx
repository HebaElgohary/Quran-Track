import { colors } from '@/constants/theme'
import { Feather } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'
interface props {
    title:string,
    name:string
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}
export default function FormHeading({title,name,setOpen}:props) {
  return (
  <View  style={{backgroundColor:'white',marginVertical:12}}>
       <View style={{display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
       <Feather name={name} size={25} onPress={()=>{ setOpen(!open)}}/>
        
        <Text style={{textAlign:'left' ,fontSize:26,fontWeight:'bold',color:colors.btnPrimary}}>{title}</Text>
       </View>
       </View>
       )
}
