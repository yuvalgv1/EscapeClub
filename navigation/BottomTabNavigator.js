import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ExploreScreen from "../screens/ExploreScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Explore') {
              iconName = 'compass';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }

            // Return the icon component
            return <Ionicons name={iconName} size={size * 1.25} color={color} />;
          },
          tabBarActiveTintColor: '#ff0000', // Customize active icon color
          tabBarInactiveTintColor: '#606060', // Customize inactive icon color
          tabBarShowLabel: false, // Hide labels
        })}
      >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
