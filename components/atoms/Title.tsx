import { colors, sizeClass,textClass } from '@/constants/theme';
import React from 'react'
import { Text, View } from 'react-native';

interface   TitleProps {
  size?: 'sm' | 'md' | 'lg'| 'xl' | 'xxl'
  variant?: 'primary' | 'secondary'|'btnPrimary'
  children: React.ReactNode
}
export default function Title({ children, size = "xl", variant = "btnPrimary" }: TitleProps) {
  return (
    <View >
    <Text style={{color:colors[variant] ,fontSize: sizeClass[size],fontWeight: 'semibold'}}> {children}</Text> 
    </View>
  );
}