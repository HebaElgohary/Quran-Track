import Header from '@/components/organisms/Header'
import MonthlyReportForm from '@/components/organisms/MonthlyReportForm'
import { useMonthlyReports } from '@/hooks/useMonthlyReports';
import { useToast } from '@/hooks/useToast';
import React from 'react'
import { View } from 'react-native'

export default function MonthlyReports() {

  const {loading,createMonthlyReport } = useMonthlyReports();
useToast();
  // ---------------- add handler --------------------//
  const addMonthlyReport = async(formData: MonthlyReportsFormData) => {
    await createMonthlyReport(formData);  
  }
  return (
    <View style={{direction:'rtl',overflowY:'scroll',height:'100%',paddingVertical:50}} >
    <Header title='التقرير الشهرى' subtitle='ملخص شامل لما ت انجازه فى الشهر '></Header>
    <MonthlyReportForm></MonthlyReportForm>
 </View>
 )
}
