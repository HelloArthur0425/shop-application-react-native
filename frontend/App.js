import * as React from 'react';
import config from './config';
import { Text, View, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import PopularScreen from './compoments/Popular/PopularScreen';
import SearchScreen from './compoments/Search/SearchScreen';
import ProfileScreen from './compoments/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();
export default function App({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 50 }}>
        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00BCD4" />
      </View>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Popular') {
                  iconName = focused ? 'ios-cellular' : 'ios-cellular-outline';
                } else if (route.name === 'Search') {
                  iconName = focused ? 'ios-search' : 'ios-search';
                } else if (route.name === 'Profile') {
                  iconName = focused ? 'people-sharp' : 'people-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'green',
              inactiveTintColor: 'gray',
            }}
          >
            <Tab.Screen name="Popular" component={PopularScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>

    </View >
  );
}
