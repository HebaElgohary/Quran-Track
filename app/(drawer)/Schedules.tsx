import CustomAlert from "@/components/atoms/CustomAlert";
import ScheduleCard from "@/components/molecules/ScheduleCard";
import Header from "@/components/organisms/Header";
import NoDataFallback from "@/components/organisms/NoDataFallback";
import NotificationCard from "@/components/organisms/NotificationsCard";
import { useSchedule } from "@/hooks/useSchedule";
import { useStudents } from "@/hooks/useStudent";
import { useToast } from "@/hooks/useToast";
import { Schedule, ScheduleFormData } from "@/types/appTypes";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  ScrollView,
  Text,
  View,
} from "react-native";
import * as Notifications from "expo-notifications";
import { colors } from "@/constants/theme";


type AddDataType = ScheduleFormData;


export default function Schedules() {

  const {
    schedules,
    createSchedule,
    loading,
    removeSchedule,
    editSchedule,
  } = useSchedule();

  const { students } = useStudents();
  const { showSuccess } = useToast();


  const [selectedScheduleId, setSelectedScheduleId] =
    useState<number | null>(null);



  // ADD
  const addSchedule = async (
    formData: ScheduleFormData
  ) => {

    await createSchedule(formData);

    showSuccess(
      "تم اضافة الموعد بنجاح"
    );
  };



  // DELETE ALERT
  const openDeleteAlert = (
    id: number
  ) => {
    setSelectedScheduleId(id);
  };



  // DELETE
const confirmDelete = async () => {
  if (selectedScheduleId === null) return;

  await removeSchedule(selectedScheduleId);

  showSuccess("تم حذف الموعد");

  setSelectedScheduleId(null);
};


  return (

    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        // direction:'rtl'
      }}

      contentContainerStyle={{
        paddingTop: 45,
        paddingHorizontal: 12,
        paddingBottom: 40,
      }}

      showsVerticalScrollIndicator={false}

    >

      {/* HEADER */}
      <View
        style={{
          marginBottom: 15,
        }}
      >

        <Header<AddDataType>
          handleSubmit={addSchedule}
          title="المواعيد"
          subtitle="سينبهك التطبيق بصوت عالى قبل الحصة بـ 5 دقائق"
          btn="أضف موعد جديد"
          formName="Schedule"
        />

      </View>



      {/* NOTIFICATION INFO */}
      <View
        style={{
          marginBottom: 20,
        }}
      >

        <NotificationCard />

      </View>




      {/* EMPTY STATE */}
      {
        schedules.length === 0 &&
        !loading &&
        (

          <View
            style={{
              marginTop: 30,
            }}
          >

            <NoDataFallback<AddDataType>
              handleSubmit={addSchedule}
              formName="Schedule"
              text="لا يوجد مواعيد"
              btn="أضف أول موعد"
              Icon={() => (
                <Feather
                  name="calendar"
                  size={35}
                  color="gray"
                />
              )}
            />

          </View>

        )
      }




      {/* TITLE */}
      {
        schedules.length > 0 &&
        (

          <View
            style={{
              flexDirection:"row",
              justifyContent:"flex-start",
              marginVertical:15,
              marginHorizontal:20
            }}
          >

            <Text
              style={{
                fontSize:18,
                fontWeight:"700",
                color:colors.btnPrimary,
            
              }}
            >
              كل المواعيد
            </Text>

          </View>

        )
      }





      {/* CARDS */}
      <View
        style={{
          gap:14,
        }}
      >

        {
          schedules?.map(
            (schedule: Schedule) => (

              <View
                key={schedule.id}
                style={{
                  width:"100%",
                }}
              >

                <ScheduleCard

                  schedule={schedule}

                  student={
                    students.find(
                      student =>
                        student.id ===
                        schedule.studentId
                    )
                  }

                  duration={
                    schedule.duration
                  }

                  handelUpdate={
                    editSchedule
                  }

                  openDeleteAlert={() =>
                    openDeleteAlert(
                      schedule.id
                    )
                  }

                />

              </View>

            )
          )
        }


      </View>





      {/* DELETE CONFIRM */}
      <CustomAlert

        show={
          selectedScheduleId !== null
        }

        title="حذف الموعد"

        message="هل أنت متأكد أنك تريد حذف هذا الموعد؟"

        confirmText="حذف"

        cancelText="الغاء"

        onCancel={() =>
          setSelectedScheduleId(null)
        }

        onConfirm={
          confirmDelete
        }

      />


    </ScrollView>

  );
}