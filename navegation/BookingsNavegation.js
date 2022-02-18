import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const BookingsStack=createNativeStackNavigator();

const BookingsNavegation = () => {
  return (
    <BookingsStack.Navigator>
        <BookingsStack.Screen/>
    </BookingsStack.Navigator>
  )
}

export default BookingsNavegation