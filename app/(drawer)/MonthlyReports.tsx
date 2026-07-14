import Loadign from '@/animations/Loading';
import MonthlyReportsDetails from '@/components/molecules/MonthlyReportsDetails';
import Header from '@/components/organisms/Header'
import MonthlyReportForm from '@/components/organisms/MonthlyReportForm'
import { colors } from '@/constants/theme';
import { useMonthlyReports } from '@/hooks/useMonthlyReports';
import { useToast } from '@/hooks/useToast';
import { MonthlyReportsFormData } from '@/types/appTypes';
import React, { useEffect, useState } from 'react'
import { ScrollView } from "react-native";

export type AddType =MonthlyReportsFormData

export default function MonthlyReports() {
  const { showSuccess } = useToast();
  const [report,setReport]=useState<MonthlyReportsFormData|null>(null)
  // const {
  //   monthlyReports,
  //   report,
  //   createMonthlyReport,
  //   loading,
  // } = useMonthlyReports();

  const [show, setShow] = React.useState(false);



  const addMonthlyReport =  (formData: AddType) => {
    try {
       setReport(formData);

      setShow(true);
    } catch (error) {}

    console.log("added", formData);
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        // direction: "rtl",
        paddingVertical: 50,
        paddingHorizontal: 5,
        paddingBottom: 100,
        backgroundColor:colors.background
      }}
      showsVerticalScrollIndicator={false}
    >
      <Header
        title="التقرير الشهرى"
        subtitle="ملخص شامل لما تم إنجازه فى الشهر"
      />

      <MonthlyReportForm<AddType>
        handleSubmit={addMonthlyReport}
      />


      {report && show && (
        <MonthlyReportsDetails report={report} />
      )}
    </ScrollView>
  );
}