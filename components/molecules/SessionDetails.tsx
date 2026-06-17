import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { useSession } from "@/hooks/useSession";
import Header from "@/components/organisms/Header";
import Button from "../atoms/Button";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/constants/theme";

export default function SessionDetails({reportId}:{reportId?:number|null}) {

  const { sessions } = useSession();

   const session =reportId ? sessions.find(
    (s) => s.id === Number(reportId)
  ):null;

  if (!session) {
    return <Text>الجلسة غير موجودة</Text>;
  }

  return (
    <View>
      <Header title=" تقرير الحصة " />
       {/* -------------Action btns --------- */}
      <View style={{ display: "flex", flexDirection: "row" ,justifyContent:'space-around'}}>
        <Button size="md" variant="gray" textColor="black"  >
          <Feather name="share-2" size={12} color="black"style={{marginLeft:5}} />
         <Text style={{fontSize:10,marginLeft:8}}>واتساب</Text> 
        </Button >
           <Button size="md" variant="gray" textColor="black"  >
          <Feather name="arrow-right" size={12} color="black" />
         <Text style={{fontSize:10,marginLeft:8}}>رجوع</Text> 
        </Button>
         <Button size="md" variant="gray" textColor="black"  >
          <Feather name="edit-2" size={12} color="black" />
         <Text style={{fontSize:10,marginLeft:8}}>تعديل</Text> 
        </Button>
      </View>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end",marginVertical:10 ,gap:10}}>
            <Button  size="lg"   >
          <Feather name="printer" size={13} />
         <Text style={{fontSize:10,marginLeft:8}}> طباعة/PDF</Text> 
        </Button>
             <Button  size="lg" variant="transparent" textColor="black" >
              <View style={{display:'flex',justifyContent:'center',alignItems:'center',width:100,height:100,backgroundColor:'#F3F7F8',borderRadius:20}}>
         <Text style={{fontSize:10,marginLeft:8}}> English</Text> 

              </View>
         <Text style={{fontSize:10,marginLeft:8}}> العربية</Text> 
       
        </Button>
      </View>
      {/* ------------------------------------- */}
      <Text>{session.surah}</Text>
    </View>
  );
}