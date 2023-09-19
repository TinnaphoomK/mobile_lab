import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Exam1 from "../../lab_components/Lab8/Example01.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Exam01"
        component={Exam1}
        options={{ title: "Example01" }}
      />
    </Stack.Navigator>
  );
}
