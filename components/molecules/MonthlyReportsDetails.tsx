import Header from "@/components/organisms/Header";
import { useSession } from "@/hooks/useSession";
import { useStudents } from "@/hooks/useStudent";
import { MonthlyReports, MonthlyReportsFormData, Session } from "@/types/appTypes";
import { printSessionPdf } from "@/utils/printSessionPdf";
import { shareSessionPdf } from "@/utils/shareSessionPdf";
import { buildEnglishSession } from "@/utils/buildEnglishSession";
import { Feather } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import { useCallback, useMemo, useState } from "react";
import { Text, View, Pressable } from "react-native";
import Button from "../atoms/Button";
import FormModal from "./form/FormModal";
import MonthlyReport from "./MonthlyReport";

// type updateDataType = Session;

export default function MonthlyReportsDetails({
//   handleUpdate,
  closeReport,
  report,
}: {
//   handleUpdate: (data: updateDataType) => Promise<void>;
  report?: MonthlyReportsFormData | null;
  closeReport?: () => void;
}) {
  const { sessions, loadSessions } = useSession();
  const { students } = useStudents();

  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<"ar" | "en">("ar");

//   useFocusEffect(
//     useCallback(() => {
//       loadSessions();
//     }, [open])
//   );

 
  const student = students.find((s) => s.id === report?.studentId);

  // -----------------------------

  // -----------------------------
  // SHARE
  // -----------------------------
//   const handleWhatsappShare = async () => {
//     if (!displaySession) return;

//     await shareSessionPdf(
//       displaySession,
//       student?.nameAr ?? ""
//     );
//   };

//   if (!displaySession) {
//     return <Text>الجلسة غير موجودة</Text>;
//   }

  return (
    <View>
      <Header title="تقرير الحصة" />

      {/* ACTION BUTTONS */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 14,
        }}
      >

            {/* LANGUAGE SWITCH */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: 160,
            height: 40,
            backgroundColor: "#EEEEEE",
            borderRadius: 15,
          }}
        >
          {/* ENGLISH */}
          <Pressable
            onPress={() => setLanguage("en")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 70,
              height: 35,
              borderRadius: 20,
              backgroundColor:
                language === "en" ? "#FFFFFF" : "#EEEEEE",
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: "600" }}>
              English
            </Text>
          </Pressable>

          {/* ARABIC */}
          <Pressable
            onPress={() => setLanguage("ar")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 70,
              height: 35,
              borderRadius: 20,
              backgroundColor:
                language === "ar" ? "#FFFFFF" : "#EEEEEE",
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: "600" }}>
              العربية
            </Text>
          </Pressable>
        </View> 

        {/* -------------------- */}
        <Button
          size="md"
          variant="gray"
          textColor="black"
        //   onClick={handleWhatsappShare}
        >
          <Text style={{ fontSize: 10, marginLeft: 8 }}>
            واتساب
          </Text>
          <Feather name="share-2" size={12} color="black" />
        </Button>
             <Button
          size="lg"
        //   onClick={() =>
        //     printSessionPdf(
        //       displaySession,
        //       student?.nameAr ?? ""
        //     )
        //   }
        >
          <Feather name="printer" size={13} />
          <Text style={{ fontSize: 10 }}>
            PDF / طباعة
          </Text>
        </Button>

    

      </View>

      {/* PRINT + LANGUAGE SWITCH */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginVertical: 13,
          gap: 10,
        }}
      >
   
      </View>

      {/* REPORT */} 
     <MonthlyReport
        session={displaySession}
        lang={language}
      /> 

 
    </View>
  );
}