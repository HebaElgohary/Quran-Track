import { Feather } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'
import Title from '../atoms/Title'
import Button from '../atoms/Button'

interface Props {
        name:string,
        date:string,
        time:string,
        duration:number
}
export default function ScheduleCard({name,date,time,duration}:Props) {
  return (
    <div style={{display:'flex',flexDirection:'row',gap:10,alignItems:'center'}}>
<Feather name="bell" size={20} color="gray" />
<View style={{display:'flex',flexDirection:'column',gap:3}}>
<Title>{name}</Title>
<Text>{date} {time}</Text>
<Text>{duration} دقيقة</Text>
</View>
     <Button variant="transparent" textColor="warning" size="sm" 
            // onClick={() => setOpen(true)} 
            >


          تعديل <Feather name="edit-2" />
        </Button>

        <Button
          variant="transparent"
          textColor="danger"
          size="sm"
        //   onClick={handelDelete}
        >
          حذف <Feather name="trash-2" />
        </Button>

    </div>
  )
}
