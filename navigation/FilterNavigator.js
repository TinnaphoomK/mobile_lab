import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FiltersScreen from "../lab_components/FiltersScreen";

const Stack = createNativeStackNavigator();

export default function FilNav() {
  return (
    <Stack.Navigator initialRouteName="Filter">
      <Stack.Screen
        name="Filter"
        component={FiltersScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
