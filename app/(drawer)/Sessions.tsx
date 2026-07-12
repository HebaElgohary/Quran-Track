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
import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";

type AddDataType = SessionFormData;
export default function sessions() {
  const { createSession, sessions, loading, removeSession, editSession } =
    useSession();
  const { students } = useStudents();
  const { showSuccess, showError } = useToast();
  const [selectedSessionId, setSelectedSessionId] = useState<number | null>(
    null,
  );
  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(
    null,
  );
  const [reportId, setReportId] = useState<number | null>(null);
  const [report, setReport] = useState(false);

useFocusEffect(
  useCallback(() => {
    console.log("Sessions screen focused");
    // setReportId(null);

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

  //----------- Add handler --------------//
  const addSession = async (formData: AddDataType) => {
    console.log("data inside addsession", formData);
    await createSession(formData);
    showSuccess("تم اضافة الحصة بنجاح");
  };

  // ----------------------------------//
  // alert in case of delte only to make sure he really wants to delete student
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
    setReport(true);
  };
  filteredSessions.forEach((s) => {
    console.log({
      id: s.id,
      dateTime: s.dateTime,
      session: s,
    });
  });
  return (
    <View
      style={{
        direction: "rtl",
        overflowY: "scroll",
        height: "100%",
        paddingVertical: 50,
        paddingHorizontal: 5,
      }}
    >
      {!reportId ? (
        <View>
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
              Icon={() => <Feather name="book-open" size={30} color="gray" />}
              text="لاتوجد حصص مسجلة "
              btn="اضف اول حصة "
            />
          )}
          {!reportId &&
            filteredSessions.map((session) => (
              <SessionCard
                key={session.id}
                student={
                  students.find(
                    (student) => student.id == session.studentId,
                  ) as Student
                }
                time={session.dateTime}
                surah={session.surah}
                from={session.from}
                next={session.new}
                revision={session.revision}
                to={session.to}
                grade={session.grade}
                session={session}
                handelDelete={() => openDeleteAlert(session.id)}
                handleUpdate={editSession}
                onReport={() => openReport(session.id)}
              />
            ))}

          {/* // will show alert in case of delete only */}
          <CustomAlert
            show={selectedSessionId !== null}
            title="حذف الحصة"
            message="هل أنت متأكد أنك تريد حذف هذه الحصة"
            confirmText="حذف"
            cancelText="الغاء"
            onCancel={() => setSelectedSessionId(null)}
            onConfirm={confirmDelete}
          />
          {/* //-----------------------------// */}
        </View>
      ) : (
        <SessionDetails
          key={reportId}
          handleUpdate={editSession}
          reportId={reportId}
          closeReport={() => setReportId(null)}
        />
      )}
    </View>
  );
}
