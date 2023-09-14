import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Home,
  Programs,
  Lab31,
  Lab32,
  Lab41,
  Lab51,
  Lab7,
  Lab8,
} from "./lab_components/index";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createDrawerNavigator();

export default function Lab3() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator
      initialRouteName="Lab7"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Programs" component={Programs} />
        <Stack.Screen name="Lab31" component={Lab31} />
        <Stack.Screen name="Lab32" component={Lab32} />
        <Stack.Screen name="Lab41" component={Lab41} />
        <Stack.Screen name="Lab51" component={Lab51} />
        <Stack.Screen name="Lab7" component={Lab7} />
        <Stack.Screen name="Lab8" component={Lab8} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
