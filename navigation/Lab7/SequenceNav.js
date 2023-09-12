import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SequenceScreen from "../../lab_components/Lab7/SequenceScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="Sequence"
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="SequenceTab"
        component={SequenceScreen}
        options={{ title: "SequenceTab" }}
      />
    </Stack.Navigator>
  );
}
