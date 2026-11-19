import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppProvider } from './AppContext';
import HomeTab from './HomeTab';
import SettingsTab from './SettingsTab';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // Provider wraps the navigation so every tab can access the global state
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeTab}
            options={{ tabBarIcon: () => <Text>🏠</Text> }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsTab}
            options={{ tabBarIcon: () => <Text>⚙️</Text> }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}