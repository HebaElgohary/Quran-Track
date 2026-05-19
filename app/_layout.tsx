import React, { useEffect } from 'react'
import {Stack} from "expo-router";
import { I18nManager } from 'react-native';
import Toast from 'react-native-toast-message';


export default function Layout() {
  I18nManager.forceRTL(true)
  useEffect(()=>
  I18nManager.forceRTL(true)
  ,[])
  return (
    <Stack >
      <Toast />

        <Stack.Screen name="(drawer)" options={{headerShown: false}} />
    </Stack>
  )
}
