import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen"
import CategoryMealsScreen from "./screens/CategoryMealsScreen"
import MealDetailScreen from "./screens/MealDetailScreen"
// import { title } from "process";



const MealsNavigator = createNativeStackNavigator();
// const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <MealsNavigator.Navigator initialRouteName = "S1"
        screenOptions= {{ 
          headerStyle: { backgroundColor: "#4a148c", },
          headerTintColor: "white"
        }}>
        <MealsNavigator.Screen name = "Category" component = {CategoriesScreen}
          options={{
            title: "Meal Categories"
          }}  />
        <MealsNavigator.Screen name = "CategoryMeals" component = {CategoryMealsScreen} 
          options={
            ({route}) => ({
              title : route.params.categoryTitle
            })
          
          } />
        <MealsNavigator.Screen name = "MealDetail" component = {MealDetailScreen} 
          options={
            ({route}) => ({
              title : route.params.dish,
            })
          }
        />
      </MealsNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});