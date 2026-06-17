import { StyleSheet, Text, View } from "react-native";
import Hr from "../atoms/Hr";
import Title from "../atoms/Title";

export default function SessionReport() {
  return (
    <View
      style={styles.container}
    >
      <Text> تقرير حصة </Text>
      <Title size="xl"> القران الكريم والتجويد</Title>
      <Text> بسم الله الرحمن الرحيم</Text>
      <Hr />
      {/*---------- first row ----------  */}
      <View
        style={styles.row}
      >
        {/* -------------- */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text>اسم المعلم</Text>
          <Text>الاستاذ معاذ</Text>
        </View>
        {/* --------------- */}
        {/* ------------------------- */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text>اسم الطالب</Text>
          <Text> زكريا</Text>
        </View>
        {/* ------------------------------- */}
        {/* ----------------------------------------- */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Text> التاريخ</Text>
          <Text> 1/1/2023</Text>
        </View>
        {/* -------------------------------- */}
      </View>
      {/* ----------------- */}
       {/* ------------------second row ------------- */}
      <View style={styles.row}>
        <Text> التقييم</Text>
        <Text> جيد</Text>
      </View>
      {/* ---------------------------------- */}

            {/* ------------------third row ------------- */}
      <View style={styles.row}>
        <Text> السورة</Text>
        <Text> المائدة</Text>
      </View>
      {/* ---------------------------------- */}
              {/* ------------------fourth row ------------- */}
      <View style={styles.row}>
        <Text> الايات</Text>
        <Text> 1-22</Text>
      </View>
      {/* ---------------------------------- */}
              {/* ------------------fifth row ------------- */}
      <View style={styles.row}>
        <Text> الحفظ الجديد</Text>
        <Text> المائدة من الاية 22 الى الاية 33</Text>
      </View>
      {/* ---------------------------------- */}
                {/* ------------------fifth row ------------- */}
      <View style={styles.row}>
        <Text>  المراجعة</Text>
        <Text>  مراجعة سورة البقرة  </Text>
      </View>
      {/* ---------------------------------- */}
               {/* -----------------sixth row ------------- */}
      <View style={styles.row}>
        <Text>  احكام التجويد</Text>
        <Text>  الادغام   </Text>
      </View>
      {/* ---------------------------------- */}
            {/* ----------------seventh row ------------- */}
      <View style={styles.row}>
        <Text>  ملاحظة</Text>
        <Text>  مستوى الحفظ جيد   </Text>
      </View>
      {/* ---------------------------------- */}
      {/* ------------footer-------------  */}
      <Hr style={{ width: "80%",height:1,backgroundColor:'gray' }}/>
          <Text>  __جزاكم الله خيرا وجعلكم من اهل القران __</Text>
{/* ------------------------ */}
    </View>
  );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
      },
      row:{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }
});