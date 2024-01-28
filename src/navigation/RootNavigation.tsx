import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import UploadScreen from '@screens/UploadScreen';
import EventDetail from '@screens/EventDetail';
import VentDetail from '@screens/VentDetail';
import CreateScreen from '@screens/CreateScreen';
import LoginScreen from '@screens/LoginScreen';
import RegisterScreen from '@screens/RegisterScreen';

const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Tab"
        component={BottomNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Upload"
        component={UploadScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="VentDetail"
        component={VentDetail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Create"
        component={CreateScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
