import Header from "@/components/organisms/Header";
import { useSession } from "@/hooks/useSession";
import { Feather } from "@expo/vector-icons";
import { Share, Text, View } from "react-native";
import Button from "../atoms/Button";
import SessionReport from "./SessionReport";
import FormModal from "./form/FormModal";
import { Session } from "@/types/appTypes";
import { useCallback, useMemo, useState } from "react";
import { useFocusEffect } from "expo-router";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";

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

 const handleShare = async () => {
  try {
    await Share.share({
      message: `
📖 تقرير حصة قرآن

الطالب: ${student?.nameAr}
السورة: ${session.surah}
الآيات: ${session.from} - ${session.to}
التقييم: ${session.grade}

جزاكم الله خيراً
      `,
    });
  } catch (error) {
    console.log(error);
  }
};  
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
      const generateAndSharePdf = async () => {
  try {
    const html = `
      <html dir="rtl">
      <head>
        <meta charset="utf-8" />
        <style>
          body {
            font-family: Arial;
            padding: 30px;
            direction: rtl;
          }

          h1 {
            text-align: center;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }

          td {
            border: 1px solid #ddd;
            padding: 12px;
          }

          .label {
            font-weight: bold;
            width: 30%;
            background: #f5f5f5;
          }
        </style>
      </head>

      <body>

        <h1>تقرير حصة القرآن الكريم والتجويد</h1>

        <table>
          <tr>
            <td class="label">اسم الطالب</td>
            <td>${student?.nameAr ?? ""}</td>
          </tr>

          <tr>
            <td class="label">التاريخ</td>
            <td>${session.date}</td>
          </tr>

          <tr>
            <td class="label">التقييم</td>
            <td>${session.grade}</td>
          </tr>

          <tr>
            <td class="label">السورة</td>
            <td>${session.surah}</td>
          </tr>

          <tr>
            <td class="label">الآيات</td>
            <td>${session.from} - ${session.to}</td>
          </tr>

          <tr>
            <td class="label">الحفظ الجديد</td>
            <td>${session.new}</td>
          </tr>

          <tr>
            <td class="label">المراجعة</td>
            <td>${session.revision}</td>
          </tr>

          <tr>
            <td class="label">أحكام التجويد</td>
            <td>${session.tajweed}</td>
          </tr>

          <tr>
            <td class="label">ملاحظات</td>
            <td>${session.notes}</td>
          </tr>
        </table>

        <p style="text-align:center;margin-top:30px">
          جزاكم الله خيراً وجعلكم من أهل القرآن
        </p>

      </body>
      </html>
    `;

    const { uri } = await Print.printToFileAsync({
      html,
    });

    await Sharing.shareAsync(uri);
  } catch (error) {
    console.log(error);
  }
};
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
