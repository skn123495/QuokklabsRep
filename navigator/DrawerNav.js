import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Categories from "../screens/Categories";
import MyAccount from "../screens/MyAccount";
import Cart from "../screens/Cart";
import SideMenu from "../components/Sidemenu/Sidemenu";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../constants/styles";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

function DrawerNav() {
  return (
    <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />}>
      <Drawer.Screen
        name="AuthStack"
        component={AuthStack}
        options={{
          headerShown: false,
          swipeEnabled: false,
        }}
      />
      <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Drawer.Screen name="Categories" component={Categories} />
      <Drawer.Screen name="Profile" component={MyAccount} />
      <Drawer.Screen name="Support" component={Cart} />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
