import CheckInput from '@/components/atoms/CheckInput'
import Input from '@/components/atoms/Input'
import React from 'react'
import { View } from 'react-native'

export default function FormField(props:any) {
    const{type}=props
    console.log('props is '+type)
  
    if (type=='text' ||type=='radio')
    return <Input {...props}/>
     if (type=='textarea')
    return <Input {...props}/>
     if (type=='checkbox')
    return <CheckInput {...props}/>


    
  
}
