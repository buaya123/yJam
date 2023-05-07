import React, {useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from './app/routes/StackNavigator';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import useFonts from './useFonts';


export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }

  return (
    <NavigationContainer independent={true} >
      <StackNavigator />
    </NavigationContainer>

    
  );
}

