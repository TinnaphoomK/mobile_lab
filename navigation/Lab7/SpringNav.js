import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SpringScreen from "../../lab_components/Lab7/SpringScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="Spring"
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="SpringTab"
        component={SpringScreen}
        options={{ title: "SpringTab" }}
      />
    </Stack.Navigator>
  );
}
