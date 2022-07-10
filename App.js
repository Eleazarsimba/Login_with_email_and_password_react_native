import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './components/src/Signin';
import Signup from './components/src/Signup';
import Homepage from './components/src/Homepage';
import Changepassword from './components/src/Changepassword';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Signin}
          options={{ title: '' }}
        />
        <Stack.Screen 
          name='Register' 
          component={Signup} 
        />
        <Stack.Screen 
          name='Home' 
          component={Homepage} 
        />
        <Stack.Screen 
          name='Forgotpassword' 
          component={Changepassword} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
