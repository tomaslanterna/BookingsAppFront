import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const UserStack=createNativeStackNavigator();


const UserNavegation = () => {
  return (
      <UserStack.Navigator>
          <UserStack.Screen/>
      </UserStack.Navigator>
  )
}

export default UserNavegation