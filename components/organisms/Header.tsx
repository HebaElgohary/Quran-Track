import React from 'react'
import {  View } from 'react-native'

import Heading from '../molecules/Heading'
import Button from '../atoms/Button'

export default function  Header
( {title, subtitle,btn} : {title: string, subtitle: string,btn?:string} ) {
  return (
    <View style={{display:'flex', flexDirection:'row' ,gap:14 ,marginVertical:14 ,padding:1 }} >
<Heading title={title}  subtitle={subtitle} />
{btn&& <Button size='lg' variant='btnPrimary'>{btn}</Button>}      
    </View>
  )
}

