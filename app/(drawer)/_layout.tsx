
import { colors } from "@/constants/theme";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Students from "./Students";
import Schedule from "./Schedule";
import Sessions from "./Sessions";
import Groups from "./Groups";
import MonthlyReports from "./MonthlyReports";
import Settings from "./Settings";
import index from ".";


export default function Layout() {
  const Drawer=createDrawerNavigator()
  return (
    <Drawer.Navigator
    screenOptions={ {
          sceneStyle:{
      backgroundColor:colors.secondary
    },
    drawerActiveBackgroundColor:colors.secondary,
    drawerActiveTintColor:colors.btnPrimary,
    drawerInactiveTintColor:colors.warning,


    drawerItemStyle:{
      borderBlockColor:colors.secondary

    },
        drawerStyle:{
      backgroundColor:colors.btnPrimary,
    },

  } }
    >
      <Drawer.Screen name="index" options={{ title: "Home page" }} component={index}/>
      <Drawer.Screen name="Students" component={Students} />
      <Drawer.Screen name="Groups" component={Groups}/>

      <Drawer.Screen name="Sessions" component={Sessions} />
      <Drawer.Screen name="Schedule" component={Schedule} />
      <Drawer.Screen name="Monthly-Reports" component={MonthlyReports} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
