import CheckInput from '@/components/atoms/CheckInput'
import Input from '@/components/atoms/Input'
import React from 'react'
import { View } from 'react-native'

export default function FormField(props:any) {
    const{type}=props
  const data=[{label:'h',id:0,checked:false}]
    if (type=='text'||'radio'||'email'||'textarea')
    return <Input props={props}/>
    if (type=='checkbox')
    return <CheckInput {...props}/>


    
  
}
