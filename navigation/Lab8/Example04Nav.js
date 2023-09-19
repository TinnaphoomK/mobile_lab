import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Exam4 from "../../lab_components/Lab8/Example04";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="Exam4"
        component={Exam4}
        options={{ title: "Example04" }}
      />
    </Stack.Navigator>
  );
}
