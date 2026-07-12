import Header from "@/components/organisms/Header";
import { useProfile } from "@/hooks/useProfile";
import { useSession } from "@/hooks/useSession";
import { useStudents } from "@/hooks/useStudent";
import { Session } from "@/types/appTypes";
import { buildEnglishSession } from "@/utils/buildEnglishSession";
import { hasEnglishData } from "@/utils/hasEnglishData ";
import { printSessionPdf } from "@/utils/printSessionPdf";
import { shareSessionPdf } from "@/utils/shareSessionPdf";
import { Feather } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import { useCallback, useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Button from "../atoms/Button";
import EnglishTranslationModal from "./EnglishTranslationModal";
import SessionReport from "./SessionReport";
import FormModal from "./form/FormModal";

type updateDataType = Session;

export default function SessionDetails({
  handleUpdate,
  closeReport,
  reportId,
}: {
  handleUpdate: (data: updateDataType) => Promise<void>;
  reportId?: number | null;
  closeReport: () => void;
}) {
  const { sessions, loadSessions } = useSession();
  const { students } = useStudents();
  const { profile, loadProfile } = useProfile();

  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<"ar" | "en">("ar");
  const [openEnglishForm, setOpenEnglishForm] = useState(false);

  useFocusEffect(
    useCallback(() => {
      loadSessions();
      loadProfile();

      return () => {
        setOpenEnglishForm(false);
      };
    }, [loadSessions, loadProfile]),
  );

  const session: Session | null = useMemo(() => {
    if (!reportId) return null;
    return sessions.find((s) => s.id === Number(reportId)) ?? null;
  }, [sessions, reportId]);

  const student = students.find((s) => s.id === session?.studentId);
  const studentName = language == "ar" ? student?.nameAr : student?.nameEn;
  const teacherName = language == "ar" ? profile?.nameAr : profile?.nameEn;

  // -----------------------------
  // DATA TRANSFORMATION
  // -----------------------------
  const displaySession = useMemo(() => {
    if (!session) return null;

    return language === "en" ? buildEnglishSession(session) : session;
  }, [session, language]);

  const handleEnglish = () => {
    if (!session) return;

    if (hasEnglishData(session)) {
      setLanguage("en");
      return;
    }

    setOpenEnglishForm(true);
  };
  // -----------------------------
  // SHARE
  // -----------------------------
  const handleWhatsappShare = async () => {
    if (!displaySession) return;

    await shareSessionPdf(
      displaySession,
      studentName ?? "",
      teacherName,
      language,
    );
  };

  if (!displaySession) {
    return <Text>الجلسة غير موجودة</Text>;
  }

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
        <Button
          size="md"
          variant="gray"
          textColor="black"
          onClick={handleWhatsappShare}
        >
          <Text style={{ fontSize: 10, marginLeft: 8 }}>واتساب</Text>
          <Feather name="share-2" size={12} color="black" />
        </Button>

        <Button
          size="md"
          variant="gray"
          textColor="black"
          onClick={closeReport}
        >
          <Feather name="arrow-left" size={12} color="black" />
          <Text style={{ fontSize: 10, marginLeft: 8 }}>رجوع</Text>
        </Button>

        <Button
          size="md"
          variant="gray"
          textColor="black"
          onClick={() => setOpen(true)}
        >
          <Feather name="edit-2" size={12} color="black" />
          <Text style={{ fontSize: 10, marginLeft: 8 }}>تعديل</Text>
        </Button>
      </View>

      {/* PRINT + LANGUAGE SWITCH */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          marginVertical: 13,
          gap: 11,
        }}
      >
        <Button
          size="lg"
          name="printer"
          onClick={() =>
            language == "ar"
              ? printSessionPdf(
                  displaySession,
                  student?.nameAr || "",
                  profile.nameAr,
                  language,
                )
              : printSessionPdf(
                  displaySession,
                  student?.nameEn || "",
                  profile.nameEn,

                  language,
                )
          }
        >
          <Text style={{ fontSize: 10, textAlign: "center" }}>
            {" "}
            {"PDF-طباعة"}
          </Text>
        </Button>

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
            onPress={() => {
              console.log("FORM MODAL OPEN:", open);
              handleEnglish();
            }}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 70,
              height: 35,
              borderRadius: 20,
              backgroundColor: language === "en" ? "#FFFFFF" : "#EEEEEE",
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: "600" }}>English</Text>
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
              backgroundColor: language === "ar" ? "#FFFFFF" : "#EEEEEE",
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: "600" }}>العربية</Text>
          </Pressable>
        </View>
      </View>

      {/* REPORT */}
      <SessionReport
        closeReport={closeReport}
        session={displaySession}
        lang={language}
      />

      {/* MODAL */}
      <FormModal<updateDataType>
        open={open}
        setOpen={setOpen}
        formData={session as updateDataType}
        formName="Sessions"
        handleSubmit={handleUpdate}
      />
      {/* //English fields required  */}
      <EnglishTranslationModal
        open={openEnglishForm}
        setOpen={setOpenEnglishForm}
        initialData={{
          newEn: session?.newEn,
          revisionEn: session?.revisionEn,
          tajweedEn: session?.tajweedEn,
          notesEn: session?.notesEn,
        }}
        onSave={async (data) => {
          if (!session) return;

          await handleUpdate({
            ...session,
            newEn: data.newEn,
            revisionEn: data.revisionEn,
            tajweedEn: data.tajweedEn,
            notesEn: data.notesEn,
          });

          setLanguage("en");
        }}
      />
    </View>
  );
}
