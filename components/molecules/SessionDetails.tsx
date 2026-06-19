import Header from "@/components/organisms/Header";
import { useSession } from "@/hooks/useSession";
import { useStudents } from "@/hooks/useStudent";
import { Session } from "@/types/appTypes";
import { printSessionPdf } from "@/utils/printSessionPdf";
import { shareSessionPdf } from "@/utils/shareSessionPdf";
import { Feather } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import { useCallback, useMemo, useState } from "react";
import { Text, View } from "react-native";
import Button from "../atoms/Button";
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
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<"ar" | "en">("ar");

  useFocusEffect(
    useCallback(() => {
      loadSessions();
    }, [open]),
  );
  const session: Session | null = useMemo<Session | null>(
    () =>
      reportId
        ? (sessions.find((s) => s.id === Number(reportId)) ?? null)
        : null,
    [sessions, reportId],
  );
  const student = students.find((s) => s.id === session?.studentId);

  const handleWhatsappShare = async () => {
    if (!session) return;

    await shareSessionPdf(session, student?.nameAr ?? "");
  };

  if (!session) {
    return <Text>الجلسة غير موجودة</Text>;
  }

  return (
    <View>
      <Header title=" تقرير الحصة " />
      {/* -------------Action btns --------- */}
      <View
        style={{
          display: "flex",
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
          <Feather
            name="share-2"
            size={12}
            color="black"
            style={{ marginLeft: 5 }}
          />
        </Button>
        <Button
          size="md"
          variant="gray"
          textColor="black"
          onClick={closeReport}
        >
          <Feather
            name="arrow-left"
            style={{ alignSelf: "flex-end", marginRight: 10 }}
            size={12}
            color="black"
          />
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginVertical: 13,
          gap: 10,
        }}
      >
        <Button
          size="lg"
          onClick={() => printSessionPdf(session, student?.nameAr ?? "")}
        >
          <Feather name="printer" size={13} />
          <Text style={{ fontSize: 10 }}>  PDF/طباعة </Text>
        </Button>
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
  <View
    onTouchEnd={() => setLanguage("en")}
    style={{
      justifyContent: "center",
      alignItems: "center",
      width: 70,
      height: 35,
      borderRadius: 20,

      backgroundColor:
        language === "en"
          ? "#FFFFFF"
          : "#EEEEEE",
    }}
  >
    <Text
      style={{
        fontSize: 13,
        fontWeight: "600",
      }}
    >
      English
    </Text>
  </View>

  <View
    onTouchEnd={() => setLanguage("ar")}
    style={{
      justifyContent: "center",
      alignItems: "center",
      width: 70,
      height: 35,
      borderRadius: 20,

      backgroundColor:
        language === "ar"
          ? "#FFFFFF"
          : "#EEEEEE",
    }}
  >
    <Text
      style={{
        fontSize: 13,
        fontWeight: "600",
      }}
    >
      العربية
    </Text>
  </View>
</View>
      </View>
      {/* ------------------------------------- */}
      {/* -------------Session Report----------------  */}
      <SessionReport session={session} lang={language} />
      {/* -------------------------------------- */}
      <View>
        <FormModal<updateDataType>
          open={open}
          setOpen={setOpen}
          formData={session}
          formName="Sessions"
          handleSubmit={handleUpdate}
        />
      </View>
    </View>
  );
}
