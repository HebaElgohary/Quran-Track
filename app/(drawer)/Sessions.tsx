import CustomAlert from "@/components/atoms/CustomAlert";
import SessionCard from "@/components/molecules/SessionCard";
import SessionDetails from "@/components/molecules/SessionDetails";
import Filter from "@/components/organisms/Filter";
import Header from "@/components/organisms/Header";
import NoDataFallback from "@/components/organisms/NoDataFallback";
import { useSession } from "@/hooks/useSession";
import { useStudents } from "@/hooks/useStudent";
import { useToast } from "@/hooks/useToast";
import { SessionFormData, SourcesMap, Student } from "@/types/appTypes";
import { Feather } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Animated, FlatList } from "react-native"; // Removed unused 'View'

type AddDataType = SessionFormData;

// 1. FIXED: Capitalized component name to "Sessions"
export default function Sessions() {
  const { createSession, sessions, loading, removeSession, editSession } =
    useSession();
  const { students } = useStudents();
  // Removed unused 'showError'
  const { showSuccess } = useToast(); 
  
  const [selectedSessionId, setSelectedSessionId] = useState<number | null>(
    null,
  );
  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(
    null,
  );
  const [reportId, setReportId] = useState<number | null>(null);
  // Removed unused 'report' and 'setReport' state

  useFocusEffect(
    useCallback(() => {
      console.log("Sessions screen focused");
      return () => {
        console.log("Sessions screen unfocused");
      };
    }, [])
  );

  const filteredSessions = (
    selectedStudentId
      ? sessions.filter((s) => s.studentId === selectedStudentId)
      : sessions
  ).sort(
    (a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime(),
  );

  useEffect(() => {
    console.log("studentsssss", students);
    console.log("sessionsssss", sessions);
  });



// -----------------------------------//
  //----------- Add handler --------------//
  const addSession = async (formData: AddDataType) => {
    console.log("data inside addsession", formData);
    await createSession(formData);
    showSuccess("تم اضافة الحصة بنجاح");
  };

  // ----------------------------------//
  // alert in case of delete only to make sure he really wants to delete student
  const openDeleteAlert = (id: number) => {
    setSelectedSessionId(id);
  };
  
  // delete student in case of confirm alert //
  const confirmDelete = async () => {
    if (selectedSessionId === null) return;
    await removeSession(selectedSessionId);
    showSuccess("تم حذف الحصة");
    setSelectedSessionId(null);
  };
  // -----------------------------//

  const sources: Partial<SourcesMap> = {
    students: students.map((student) => ({
      id: student.id,
      name: student.nameEn,
      value: student.id,
      label: student.nameAr,
      checked: false,
    })),
  };

  const openReport = (id: number) => {
    setReportId(id);
  };

  filteredSessions.forEach((s) => {
    console.log({
      id: s.id,
      dateTime: s.dateTime,
      session: s,
    });
  });

  if (reportId) {
    return (
      <SessionDetails
        key={reportId}
        reportId={reportId}
        handleUpdate={editSession}
        closeReport={() => setReportId(null)}
      />
    );
  }

  return (
    <>
      <FlatList
        data={filteredSessions}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <>
            <Header<AddDataType>
              title="الحصص"
              subtitle="كل تقارير الحصص"
              btn="تقرير حصة جديدة"
              formName="Sessions"
              handleSubmit={addSession}
            />

            <Filter
              data={sources.students}
              value={selectedStudentId}
              onChange={setSelectedStudentId}
            />

            {sessions.length === 0 && !loading && (
              <NoDataFallback<AddDataType>
                formName="Sessions"
                handleSubmit={addSession}
                Icon={() => (
                  <Feather name="book-open" size={30} color="gray" />
                )}
                text="لاتوجد حصص مسجلة"
                btn="اضف اول حصة"
              />
            )}
          </>
        }
        renderItem={({ item }) => (
          <SessionCard
            student={
              students.find((s) => s.id === item.studentId) as Student
            }
            time={item.dateTime}
            surah={item.surah}
            from={item.from}
            next={item.new}
            revision={item.revision}
            to={item.to}
            grade={item.grade}
            session={item}
            handelDelete={() => openDeleteAlert(item.id)}
            handleUpdate={editSession}
            onReport={() => openReport(item.id)}
          />
        )}
        contentContainerStyle={{
          paddingHorizontal: 5,
          paddingTop: 50,
          paddingBottom: 120,
        }}
        showsVerticalScrollIndicator={false}
      />
      <CustomAlert
        show={selectedSessionId !== null}
        title="حذف الحصة"
        message="هل أنت متأكد أنك تريد حذف هذه الحصة؟"
        confirmText="حذف"
        cancelText="إلغاء"
        onCancel={() => setSelectedSessionId(null)}
        onConfirm={confirmDelete}
      />
    </>
  );
}