import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Exam4 from "../../lab_components/Lab8/Example04";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="Exam4"
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Exam4"
        component={Exam4}
        options={{ title: "Exam4" }}
      />
    </Stack.Navigator>
  );
}
