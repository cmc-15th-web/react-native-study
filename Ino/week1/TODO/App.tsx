import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './app/component/Nav';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}

export default App;
