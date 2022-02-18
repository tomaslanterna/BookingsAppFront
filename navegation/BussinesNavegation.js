import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const BussinesStack=createNativeStackNavigator();

const BussinesNavegation = () => {
  return (
    <BussinesStack.Navigator>
        <BussinesStack.Screen/>
    </BussinesStack.Navigator>
  )
}

export default BussinesNavegation