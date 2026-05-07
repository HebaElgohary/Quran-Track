import { getFormFields } from '@/utils/getFormFields'
import React from 'react'
import { View } from 'react-native'
import FormField from './FormField'
import Button from '@/components/atoms/Button'
interface props{
    page:string,
    btn1?:string,
    btn2?:string,
    setOpen:any
}
export default function Form({page,btn1,btn2,setOpen}:props) {
  return (
    <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent:'space-between',
              overflow:'hidden',

            }}
          >
            <View style={{display:'flex' ,marginVertical:14,padding:12,gap:10}}>
            {getFormFields(page)?.map((field) => (
              <FormField key={field?.label} {...field} />
            ))}
            </View>
            <View style={{display:'flex', flexDirection:'row',alignItems:'flex-end',gap:5}}>
            <Button size='sm' variant="gray"  textColor="black" onClick={() => setOpen(false)}> {btn1}</Button>
           
            <Button size='sm' textColor="white" onClick={() => setOpen(false)}> {btn2}</Button>
          </View>
          </View>
  )
}
