import { colors, sizeClass,textClass } from '@/constants/theme';
import React from 'react'
import { Text, View } from 'react-native';

interface   TitleProps {
  size?: 'sm' | 'md' | 'lg'| 'xl' | 'xxl'
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}
export default function Title({ children, size = "xl", variant = "primary" }: TitleProps) {
  return (
    <View >
    <Text style={{color:colors[variant] ,fontSize: sizeClass[size],fontWeight: 'semibold'}}> {children}</Text> 
    </View>
  );
}