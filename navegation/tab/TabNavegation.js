import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';

const BottomTabs=createBottomTabNavigator();

const TabNavegation = () => {
  return (
    <BottomTabs.Navigator>
        <BottomTabs.Screen/>
        <BottomTabs.Screen/>
        <BottomTabs.Screen/>
    </BottomTabs.Navigator>
  )
}

export default TabNavegation