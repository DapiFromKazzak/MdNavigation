import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import MainAppbar from './components/MainAppbar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          header: (props) => <MainAppbar {...props} />,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}