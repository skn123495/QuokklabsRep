import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons } from "@expo/vector-icons";
import WelcomeScreen from "../screens/WelcomeScreen";
import Categories from "../screens/Categories";
import MyAccount from "../screens/MyAccount";
import Cart from "../screens/Cart";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#0052FE",
        tabBarInactiveTintColor: "#231F1E",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={22}
              color={focused ? "#0052FE" : "#231F1E"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="attach-sharp"
              size={22}
              color={focused ? "#0052FE" : "#231F1E"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="users"
              size={22}
              color={focused ? "#0052FE" : "#231F1E"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="cart"
              size={22}
              color={focused ? "#0052FE" : "#231F1E"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const BottomTabNav = () => {
  return (
      <BottomNavigator />
  );
};
export default React.memo(BottomTabNav);
