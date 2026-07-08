import Loadign from '@/animations/Loading';
import MonthlyReportsDetails from '@/components/molecules/MonthlyReportsDetails';
import Header from '@/components/organisms/Header'
import MonthlyReportForm from '@/components/organisms/MonthlyReportForm'
import { useMonthlyReports } from '@/hooks/useMonthlyReports';
import { useToast } from '@/hooks/useToast';
import { MonthlyReportsFormData } from '@/types/appTypes';
import React, { useEffect } from 'react'
import { ScrollView } from "react-native";

export type AddType =MonthlyReportsFormData

export default function MonthlyReports() {
  const { showSuccess } = useToast();
  const {
    monthlyReports,
    report,
    createMonthlyReport,
    loading,
  } = useMonthlyReports();

  const [show, setShow] = React.useState(false);

  useEffect(() => {
    if (report) {
      setShow(true);
    }
  }, [report]);

  const addMonthlyReport = async (formData: AddType) => {
    try {
      await createMonthlyReport(formData);

      showSuccess("تم اضافة التقرير الشهرى بنجاح");
      setShow(true);
    } catch (error) {}

    console.log("added", formData);
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        direction: "rtl",
        paddingVertical: 50,
        paddingHorizontal: 5,
        paddingBottom: 100,
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

      {loading && <Loadign />}

      {report && show && (
        <MonthlyReportsDetails report={report} />
      )}
    </ScrollView>
  );
}