import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Exam3 from "../../lab_components/Lab8/Example03";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="Exam3"
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Exam3"
        component={Exam3}
        options={{ title: "Exam3" }}
      />
    </Stack.Navigator>
  );
}
