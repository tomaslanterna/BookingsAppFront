import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavegation from './tab/TabNavegation';

const MainNavegation = () => {
  return (
    <NavigationContainer>
        <TabNavegation/>
    </NavigationContainer>
  )
}

export default MainNavegation