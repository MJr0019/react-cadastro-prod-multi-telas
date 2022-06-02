import * as React from 'react';
import Lista from './components/Lista'
import Navegacao from './components/Navegacao';
import {NavigationContainer} from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <Lista>
        <Navegacao/>
      </Lista>
    </NavigationContainer>
  );
}