import React from 'react'
import { Button, View } from 'react-native'
import Hr from '../atoms/Hr'
import Title from '../atoms/Title'
import Subtitle from '../atoms/Subtitle'

export default function  Heading
( {title, subtitle} : {title: string, subtitle: string} ) {
  return (
    <View style={{maxWidth:'60%',padding:8}}>
        <Title  size="xl" variant="btnPrimary"> {title} </Title>
        <Subtitle size="sm" variant="primary"> {subtitle} </Subtitle>
        <Hr></Hr>      
    </View>
  )
}
