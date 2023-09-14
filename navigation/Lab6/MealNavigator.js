import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../lab_components/CategoriesScreen";
import CategoryMealsScreen from "../lab_components/CategoryMealsScreen";
import MealDetailScreen from "../lab_components/MealDetailScreen";
import MyNavigator from "./MyNavigator";

const Stack = createNativeStackNavigator();

export default function MealNav() {
  return (
    <Stack.Navigator
      initialRouteName="Category"
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Category" component={MyNavigator} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}
