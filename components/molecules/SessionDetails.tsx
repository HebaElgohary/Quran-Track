import Header from "@/components/organisms/Header";
import { useSession } from "@/hooks/useSession";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Button from "../atoms/Button";
import SessionReport from "./SessionReport";
import FormModal from "./form/FormModal";
import { Session } from "@/types/appTypes";
import { useCallback, useMemo, useState } from "react";
import { useFocusEffect } from "expo-router";

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
  const { sessions,loadSessions } = useSession();
  const [open, setOpen] = useState(false);

  
  useFocusEffect(
    useCallback(() => {
      loadSessions();
    }, [open])
  );
  const session: Session | null = useMemo<Session | null>(() =>
    reportId ? sessions.find((s) => s.id === Number(reportId)) ?? null : null,
    [sessions, reportId]
  );

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
        <Button size="md" variant="gray" textColor="black">
        
          <Text style={{ fontSize: 10, marginLeft: 8 }}>واتساب</Text>
            <Feather
            name="share-2"
            size={12}
            color="black"
            style={{ marginLeft: 5 }}
          />
        </Button>
        <Button size="md" variant="gray" textColor="black" onClick={closeReport}>
          <Feather name="arrow-left" style={{ alignSelf: "flex-end", marginRight: 10 }} size={12} color="black" />
          <Text style={{ fontSize: 10, marginLeft: 8 }}>رجوع</Text>
        </Button>
        <Button size="md" variant="gray" textColor="black" onClick={() => setOpen(true)}>
          <Feather name="edit-2" size={12} color="black"  />
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
        <Button size="lg">
          <Feather name="printer" size={13} />
          <Text style={{ fontSize: 10, marginLeft: 8 }}> طباعة/PDF</Text>
        </Button>
        <View
          style={{
            display: "flex",
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
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 70,
              height: 35,
              backgroundColor: "#EEEEEE",
              borderRadius:20,
            }}
          >
            <Text style={{ fontSize: 13, marginLeft: 8, fontWeight: "semibold" }}> English</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 70,
              height: 35,
              backgroundColor: "#FFFFFFFf",
              borderRadius: 20,
            }}
          >
            <Text style={{ fontSize: 13, marginLeft: 8 , fontWeight: "semibold"  }}> العربية</Text>
          </View>
        </View>
      </View>
      {/* ------------------------------------- */}
       {/* -------------Session Report----------------  */}
       <SessionReport session={session} />
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
