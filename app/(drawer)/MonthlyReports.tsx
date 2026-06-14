import Header from '@/components/organisms/Header'
import MonthlyReportForm from '@/components/organisms/MonthlyReportForm'
import { useMonthlyReports } from '@/hooks/useMonthlyReports';
import { useToast } from '@/hooks/useToast';
import { MonthlyReportsFormData } from '@/types/appTypes';
import React from 'react'
import { View } from 'react-native'

export type AddType =MonthlyReportsFormData
export default function MonthlyReports() {

  const {loading,createMonthlyReport } = useMonthlyReports();
const { showSuccess } = useToast();
  // ---------------- add handler --------------------//
  const addMonthlyReport = async(formData: AddType) => {
  
    await createMonthlyReport(formData);  
    showSuccess('تم اضافة التقرير الشهرى بنجاح');
  }
  return (
    <View style={{direction:'rtl',overflowY:'scroll',height:'100%',paddingVertical:50}} >
    <Header title='التقرير الشهرى' subtitle='ملخص شامل لما ت انجازه فى الشهر '></Header>
    <MonthlyReportForm<AddType> handleSubmit={addMonthlyReport} />
 </View>
 )
}
