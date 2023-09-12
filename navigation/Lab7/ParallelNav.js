import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ParallelScreen from "../../lab_components/Lab7/ParallelScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="Parallel"
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="ParallelTab"
        component={ParallelScreen}
        options={{ title: "ParallelTab" }}
      />

    </Stack.Navigator>
  );
}
