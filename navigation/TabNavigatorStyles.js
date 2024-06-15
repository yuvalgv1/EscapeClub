import React from "react";
import { Ionicons } from "@expo/vector-icons";
import colors from "../styles/colors";

const tabNavigatorStyles = {
    tabBarOptions: (route) => ({
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
      tabBarActiveTintColor: colors.primary, // Customize primary icon color
      tabBarInactiveTintColor: colors.secondary, // Customize inactive icon color
      tabBarShowLabel: false, // Hide labels
    }),
    commonHeaderOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.secondary,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  };

  
  export default tabNavigatorStyles;
  