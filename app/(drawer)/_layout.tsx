import { colors } from "@/constants/theme";
import { createDrawerNavigator, DrawerContent, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import index from ".";
import Groups from "./Groups";
import MonthlyReports from "./MonthlyReports";
import Schedule from "./Schedule";
import Sessions from "./Sessions";
import Settings from "./Settings";
import Students from "./Students";
import { Image, Text, View } from "react-native";
import React from "react";
import Title from "@/components/atoms/Title";

export default function Layout() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
  drawerContent=  {({...props})=> <DrawerContentScrollView>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:5,marginVertical:15}}>
          <Image resizeMode="cover"   style={{height:80,width:80,borderRadius:40}}  source={require('../../assets/images/julianna-huszakne-HUDIJlj9DGY-unsplash.jpg')}  />
      <View>
        <Title size="xxl" variant="white"  >Quran Track</Title>
      <Text style={{marginHorizontal:25,color:colors.secondary}} >Quran and Tajweed</Text>
      </View>

        </View>
        {/* Welcome section  */}
        <View style={{marginBottom:40,marginHorizontal:10}}>
      <Title variant="secondary" size="md" >Welcome Mr</Title>
      <Title variant="white" size="md">Moaz</Title>
</View>
{/* ////////////////////////////////// */}

<DrawerItemList {...props} />

      </DrawerContentScrollView>}
      screenOptions={{
        sceneStyle: {
          backgroundColor: colors.secondary,
        },
        drawerActiveBackgroundColor: colors.warning,
        drawerActiveTintColor: colors.btnPrimary,
        drawerInactiveTintColor: "#ffffff",

        drawerItemStyle: {
          borderBlockColor: colors.secondary,
        },
        drawerStyle: {
          backgroundColor: colors.btnPrimary,
        },
      }}
    >
     
      <Drawer.Screen
        name="index"
        options={{ title: "Home page" }}
        component={index}
      />
      <Drawer.Screen name="Students" component={Students} />
      <Drawer.Screen name="Groups" component={Groups} />

      <Drawer.Screen name="Sessions" component={Sessions} />
      <Drawer.Screen name="Schedule" component={Schedule} />
      <Drawer.Screen name="Monthly-Reports" component={MonthlyReports} />
      <Drawer.Screen name="Settings" component={Settings} />
    
    </Drawer.Navigator>
  );
}

