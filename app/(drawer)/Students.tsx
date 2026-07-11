import React, { useState } from "react";
import {
  
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import CustomAlert from "@/components/atoms/CustomAlert";
import StudentCard from "@/components/molecules/StudentCard";
import Header from "@/components/organisms/Header";
import NoDataFallback from "@/components/organisms/NoDataFallback";
import Loading from "../../animations/Loading";

import { useStudents } from "@/hooks/useStudent";
import { useToast } from "@/hooks/useToast";

import { StudentFormData } from "@/types/appTypes";
import { colors } from "@/constants/theme";

type AddDataType = StudentFormData;

export default function Students() {
  const {
    students,
    createStudent,
    editStudent,
    removeStudent,
    loading,
  } = useStudents();

  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(
    null
  );

  const { showSuccess } = useToast();

  // Open delete alert
  const openDeleteAlert = (id: number) => {
    setSelectedStudentId(id);
  };

  // Confirm delete
  const confirmDelete = async () => {
    if (selectedStudentId === null) return;

    await removeStudent(selectedStudentId);

    showSuccess("تم حذف الطالب");

    setSelectedStudentId(null);
  };

  // Add Student
  const handleAdd = async (data: AddDataType) => {
    await createStudent(data);

    showSuccess("تم إضافة الطالب بنجاح");
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading />}

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Header<AddDataType>
          title="الطلاب"
          subtitle="إدارة قائمة الطلاب"
          handleSubmit={handleAdd}
          btn="إضافة طالب"
          formName="Students"
        />

        {students.length === 0 && !loading ? (
          <View style={styles.emptyContainer}>
            <NoDataFallback
              formName="Students"
              handleSubmit={handleAdd}
              text="لا يوجد طلاب مسجلين"
              btn="إضافة أول طالب"
              Icon={() => (
                <Feather
                  name="users"
                  size={34}
                  color="#94A3B8"
                />
              )}
            />
          </View>
        ) : (
          <View style={styles.listContainer}>
            {students.map((student) => (
              <View key={student.id} style={styles.cardWrapper}>
                <StudentCard
                  student={student}
                  updateStudent={editStudent}
                  handleDelete={openDeleteAlert}
                  isStudent
                  btn1="edit"
                  btn2="delete"
                />
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      <CustomAlert
        show={selectedStudentId !== null}
        title="حذف الطالب"
        message="هل أنت متأكد أنك تريد حذف هذا الطالب؟"
        confirmText="حذف"
        cancelText="إلغاء"
        onCancel={() => setSelectedStudentId(null)}
        onConfirm={confirmDelete}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    direction: "rtl",
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 40,
  },

  listContainer: {
    marginTop: 24,
    gap: 16,
  },

  cardWrapper: {
    borderRadius: 18,
    overflow: "hidden",
  },

  emptyContainer: {
    marginTop: 60,
    paddingHorizontal: 10,
  },
});