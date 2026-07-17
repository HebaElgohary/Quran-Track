import Button from '@/components/atoms/Button'
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
  <View  style={{backgroundColor:'white',marginVertical:15}}>
       <View style={{display:'flex',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
        <Text style={{textAlign:'left' ,fontSize:26,fontWeight:'bold',color:colors.btnPrimary}}>{title}</Text>
     
      <Button variant="danger" size='sm' textColor="white" onClick={()=>{ setOpen(false)}}> 
         <Feather name={'x'} size={20} /></Button>
        
       </View>
       </View>
       )
}
