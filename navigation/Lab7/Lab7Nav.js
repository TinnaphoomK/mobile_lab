import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Spring from "./SpringNav";
import Sequence from "./SequenceNav";
import Parallel from "./ParallelNav";

const Tab = createBottomTabNavigator();

export default function Lab7Nav() {
  return (
    <Tab.Navigator
      initialRouteName="Spring"
      screenOptions={{
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#F5F5F5" },
        tabBarLabelStyle: { fontSize: 15 },
      }}
    >
      <Tab.Screen
        name="Spring"
        component={Spring}
        options={{
          headerShown: false,
          title: "Spring",
        }}
      />
      <Tab.Screen
        name="Sequence"
        component={Sequence}
        options={{
          headerShown: false,
          title: "Sequence",
        }}
      />
      <Tab.Screen
        name="Parallel"
        component={Parallel}
        options={{
          headerShown: false,
          title: "Parallel",
        }}
      />
    </Tab.Navigator>
  );
}
