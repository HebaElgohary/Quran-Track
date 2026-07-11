import HomeCard from "@/components/molecules/HomeCard";
import QuickActions from "@/components/molecules/QuickActions";
import Header from "@/components/organisms/Header";
import { useStudents } from "@/hooks/useStudent";
import { useSession } from "@/hooks/useSession";
import { router, useFocusEffect } from "expo-router";
import React, { useCallback, useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { getSessionsToday } from "@/utils/getSessionsToday";
import { useSchedule } from "@/hooks/useSchedule";
import { getSessionsThisMonth } from "@/utils/getSessionsThisMonth ";
import { colors } from "@/constants/theme";

export default function Index() {
  const { students, loadStudents } = useStudents();
  const { schedules, loadSchedules } = useSchedule();
  const { loadSessions } = useSession();

  useFocusEffect(
    useCallback(() => {
      loadSchedules();
      loadStudents();
      loadSessions();
    }, [])
  );

  const sessionsToday = useMemo(
    () => getSessionsToday(schedules),
    [schedules]
  );

  const sessionsThisMonth = useMemo(
    () => getSessionsThisMonth(schedules),
    [schedules]
  );

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Header
        title="الصفحة الرئيسية"
        subtitle="نظرة عامة على حصصك وطلابك"
      />

      {/* Dashboard Cards */}
      <View style={styles.cardsGrid}>
        <View style={styles.cardWrapper}>
          <HomeCard
            title="عدد الطلاب"
            num={students.length}
            icon="users"
          />
        </View>

        <View style={styles.cardWrapper}>
          <HomeCard
            title="حصص اليوم"
            num={sessionsToday}
            icon="calendar"
          />
        </View>

        <View style={styles.cardWrapper}>
          <HomeCard
            title="حصص هذا الشهر"
            num={sessionsThisMonth}
            icon="file-text"
          />
        </View>

        <View style={styles.cardWrapper}>
          <HomeCard
            title="إجمالي الحصص"
            num={schedules.length}
            icon="book-open"
          />
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <QuickActions
          title="إجراءات سريعة"
          btn1="تقرير حصة جديدة"
          btn2="إدارة الطلاب"
          btn3="مواعيد الحصص"
          btn4="التقارير الشهرية"
          onPressBtn1={() => router.push("/(drawer)/Sessions")}
          onPressBtn2={() => router.push("/(drawer)/Students")}
          onPressBtn3={() => router.push("/(drawer)/Schedules")}
          onPressBtn4={() => router.push("/(drawer)/MonthlyReports")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 32,
    direction: "rtl",
  },

  cardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 20,
  },

  cardWrapper: {
    width: "48%",
    marginBottom: 12,
    minHeight: 110,
  },

  quickActionsContainer: {
    marginTop: 8,
    marginBottom: 20,
  },
});