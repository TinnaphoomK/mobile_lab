import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Exam3 from "../../lab_components/Lab8/Example03";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="Exam3"
        component={Exam3}
        options={{ title: "Example03" }}
      />
    </Stack.Navigator>
  );
}
