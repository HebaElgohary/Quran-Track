import CheckInput from '@/components/atoms/CheckInput'
import Input from '@/components/atoms/Input'
import React from 'react'
import { View } from 'react-native'

export default function FormField(props:any) {
    const{type}=props
  
    if (type=='text'||'radio'||'email'||'textarea')
    return <Input {...props}/>
    if (type=='checkbox')
    return <CheckInput {...props}/>


    
  
}
