import { colors, sizeClass } from '@/constants/theme';
import React from 'react'
import { Text, View } from 'react-native';

interface   SubtitleProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}
export default function Subtitle({ children, size = "md", variant = "primary" }: SubtitleProps) {
  return (
    <View >
    <Text style={{color:colors[variant] ,fontSize: sizeClass[size] ,padding:8,textAlign:'start'}}> {children}</Text> 
    </View>
  );
}