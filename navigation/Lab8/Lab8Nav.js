import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Exam1 from "./Example01Nav.js";
import Exam2 from "./Example02Nav";
import Exam3 from "./Example03Nav";
import Exam04 from "./Example04Nav.js";

const Tab = createBottomTabNavigator();

export default function Lab8Nav() {
  return (
    <Tab.Navigator
      initialRouteName="Exam1"
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#F5F5F5" },
        tabBarLabelStyle: { fontSize: 15 },
      }}
    >
      <Tab.Screen
        name="Exam1"
        component={Exam1}
        options={{
          headerShown: false,
          title: "Exam1",
        }}
      />
      <Tab.Screen
        name="Exam2"
        component={Exam2}
        options={{
          headerShown: false,
          title: "Exam2",
        }}
      />
      <Tab.Screen
        name="Exam3"
        component={Exam3}
        options={{
          headerShown: false,
          title: "Exam3",
        }}
      />
       <Tab.Screen
        name="Exam04"
        component={Exam04}
        options={{
          headerShown: false,
          title: "Exam04",
        }}
      />
    </Tab.Navigator>
  );
}
