import { colors, sizeClass } from '@/constants/theme';
import React from 'react'
import { Text, View } from 'react-native';

interface   TitleProps {
  size?: 'sm' | 'md' | 'lg'| 'xl' | 'xxl'
  variant?: 'primary' | 'secondary'|'btnPrimary' |'white'
  children: React.ReactNode
  
}
export default function Title({ children, size = "xl", variant = "btnPrimary"}: TitleProps) {
  return (
    <View >
    <Text style={{color:colors[variant] ,fontSize: sizeClass[size],fontWeight: 'bold',maxWidth:200,textAlign:'center',paddingVertical:4}}> {children}</Text> 
    </View>
  );
}