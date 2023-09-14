import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Exam2 from "../../lab_components/Lab8/Example02.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="Exam2"
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Exam2"
        component={Exam2}
        options={{ title: "Exam2" }}
      />
    </Stack.Navigator>
  );
}
