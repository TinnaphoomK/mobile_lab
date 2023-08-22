import React from 'react';
import { Button, View  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Programs, Lab31, Lab32, Lab41, Lab51 } from './lab_components/index';




const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Programs"
        onPress={() => navigation.navigate('Programs')}
      />

      <Button
        title="Lab31"
        onPress={() => navigation.navigate('Lab31')}
      />
      <Button
        title="Lab32"
        onPress={() => navigation.navigate('Lab32')}
      />
      <Button
        title="StartGameScreen"
        onPress={() => navigation.navigate('Lab41')}
      /> 
      <Button
        title="Lab51"
        onPress={() => navigation.navigate('Lab51')}
      />
    </View>

  );
};

export default function Lab3() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Lab' }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Programs"
          component={Programs}
        />

        <Stack.Screen
          name="Lab31"
          component={Lab31}
        />
        <Stack.Screen
          name="Lab32"
          component={Lab32}
        />
        <Stack.Screen
          name="Lab41"
          component={Lab41}
          />
        <Stack.Screen
          name="Lab51"
          component={Lab51}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
