import { colors } from "@/constants/theme";
import { Session, Student } from "@/types/appTypes";
import { formatDate } from "@/utils/formatDate";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

import Button from "../atoms/Button";
import Title from "../atoms/Title";
import FormModal from "./form/FormModal";

type UpdateDataType = Session;

interface SessionCardProps {
  time: Date;
  surah: string;
  grade: string;
  student?: Student;
  from: number;
  to: number;
  next: string;
  revision: string;
  handelDelete: () => void;
  handleUpdate: (data: UpdateDataType) => Promise<void>;
  session: Session;
  onReport: () => void;
}

export default function SessionCard({
  session,
  surah,
  time,
  grade,
  student,
  from,
  to,
  next,
  revision,
  handelDelete,
  handleUpdate,
  onReport,
}: SessionCardProps) {

  const [open, setOpen] = useState(false);

  const { width } = useWindowDimensions();

  const isTablet = width >= 700;


  const gradeColors: Record<string,string> = {
    ممتاز: colors.excellent,
    "جيد جدا": colors.veryGood,
    جيد: colors.good,
    متوسط: colors.average,
    ضعيف: colors.bad,
  };


  return (

    <View
      style={[
        styles.container,
        isTablet && styles.tabletContainer,
      ]}
    >


      {/* Header */}

      <View style={styles.header}>


        <View style={styles.studentSection}>

          <Title size="xl">
            {student?.nameAr ||
              student?.nameEn ||
              "طالب غير معروف"}
          </Title>


          <View style={styles.dateRow}>

            <Feather
              name="calendar"
              size={14}
              color="#64748B"
            />

            <Text style={styles.time}>
              {formatDate(time)}
            </Text>

          </View>


        </View>



        <View
          style={[
            styles.gradeBadge,
            {
              backgroundColor:
                gradeColors[grade] ||
                colors.btnPrimary,
            },
          ]}
        >

          <Text style={styles.gradeText}>
            {grade}
          </Text>

        </View>


      </View>



      {/* Details */}

      <View style={styles.content}>


        <SessionRow
          icon="book-open"
          label="السورة"
          value={`${surah || "-"} (${from}-${to})`}
        />


        <SessionRow
          icon="edit-3"
          label="الحفظ الجديد"
          value={next || "-"}
        />


        <SessionRow
          icon="rotate-cw"
          label="المراجعة"
          value={revision || "-"}
        />


      </View>



      {/* Actions */}

      <View style={styles.actionsRow}>


        <Pressable
          onPress={onReport}
          style={[
            styles.action,
            styles.report,
          ]}
        >

          <Feather
            name="file-text"
            size={16}
            color="#2563EB"
          />

          <Text style={styles.reportText}>
            تقرير
          </Text>

        </Pressable>



        <Pressable
          onPress={()=>setOpen(true)}
          style={[
            styles.action,
            styles.edit,
          ]}
        >

          <Feather
            name="edit-2"
            size={16}
            color="#EA580C"
          />

          <Text style={styles.editText}>
            تعديل
          </Text>

        </Pressable>



        <Pressable
          onPress={handelDelete}
          style={[
            styles.action,
            styles.delete,
          ]}
        >

          <Feather
            name="trash-2"
            size={16}
            color="#DC2626"
          />

          <Text style={styles.deleteText}>
            حذف
          </Text>

        </Pressable>


      </View>




      <FormModal<UpdateDataType>

        open={open}

        setOpen={setOpen}

        formData={session}

        formName="Sessions"

        handleSubmit={handleUpdate}

      />


    </View>

  );
}




function SessionRow({
  icon,
  label,
  value,
}:{
  icon:any;
  label:string;
  value:string;
}){

  return (

    <View style={styles.row}>


      <View style={styles.labelBox}>

        <Feather
          name={icon}
          size={15}
          color="#2563EB"
        />

        <Text style={styles.label}>
          {label}
        </Text>

      </View>



      <Text style={styles.value}>
        {value}
      </Text>


    </View>

  );
}





const styles = StyleSheet.create({


container:{

  direction:"rtl",

  backgroundColor:"#FFFFFF",

  marginHorizontal:16,

  marginVertical:8,

  padding:18,

  borderRadius:18,

  borderWidth:1,

  borderColor:"#E2E8F0",


  shadowColor:"#000",

  shadowOpacity:0.05,

  shadowRadius:8,

  shadowOffset:{
    width:0,
    height:3,
  },

  elevation:2,

},



tabletContainer:{

  width:"85%",

  maxWidth:700,

  alignSelf:"center",

  padding:24,

},



header:{

  direction:"rtl",

  flexDirection:"row",

  justifyContent:"space-between",

  alignItems:"center",

},



studentSection:{

  flex:1,

  gap:6,

},



dateRow:{

  flexDirection:"row",

  alignItems:"center",

  gap:6,

},



time:{

  color:"#64748B",

  fontSize:13,

},



gradeBadge:{

  paddingHorizontal:14,

  paddingVertical:8,

  borderRadius:14,

},



gradeText:{

  color:"#fff",

  fontWeight:"700",

  fontSize:13,

},



content:{

  marginTop:18,

  gap:12,

},



row:{

  direction:"rtl",

  flexDirection:"row",

  alignItems:"center",

  backgroundColor:"#F8FAFC",

  padding:12,

  borderRadius:12,

},



labelBox:{

  flexDirection:"row",

  alignItems:"center",

  gap:6,

  width:110,

},



label:{

  color:"#2563EB",

  fontWeight:"700",

  fontSize:14,

},



value:{

  flex:1,

  color:"#334155",

  fontSize:14,

  textAlign:"right",

},



actionsRow:{

  direction:"rtl",

  flexDirection:"row",

  gap:10,

  marginTop:18,

},



action:{

  flex:1,

  height:42,

  borderRadius:12,

  flexDirection:"row",

  justifyContent:"center",

  alignItems:"center",

  gap:7,

},



report:{

  backgroundColor:"#EFF6FF",

},


edit:{

  backgroundColor:"#FFF7ED",

},


delete:{

  backgroundColor:"#FEF2F2",

},



reportText:{

  color:"#2563EB",

  fontWeight:"600",

},


editText:{

  color:"#EA580C",

  fontWeight:"600",

},


deleteText:{

  color:"#DC2626",

  fontWeight:"600",

},


});