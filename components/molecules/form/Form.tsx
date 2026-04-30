import { getFormFields } from '@/utils/getFormFields'
import React from 'react'
import { View } from 'react-native'
import FormField from './FormField'
import Button from '@/components/atoms/Button'
interface props{
    page:string,
    btn1?:string,
    btn2?:string
}
export default function Form({page,btn1,btn2}:props) {
  return (
    <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent:'space-between',
              overflow:'hidden',
              color:'red'
            }}
          >
            <View style={{display:'flex' ,width:'80%',marginVertical:14,gap:10}}>
            {getFormFields(page)?.map((field) => (
              <FormField key={field.label} {...field} />
            ))}
            </View>
            <View style={{display:'flex', flexDirection:'row',justifyContent:'flex-end',gap:5}}>
            <Button size='md' variant="gray"  textColor="black" > {btn1}</Button>
           
            <Button size='md' textColor="white"> {btn2}</Button>
          </View>
          </form>
  )
}
