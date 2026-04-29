import Header from '@/components/organisms/Header'
import MonthlyReportForm from '@/components/organisms/MonthlyReportForm'
import React from 'react'
import { View } from 'react-native'

export default function MonthlyReports() {
  return (
    <View style={{direction:'rtl'}}>
    <Header title='التقرير الشهرى' subtitle='ملخص شامل لما ت انجازه فى الشهر '></Header>
    <MonthlyReportForm></MonthlyReportForm>
 </View>
 )
}
