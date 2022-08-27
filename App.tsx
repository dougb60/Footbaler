import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import { AppRoutes } from './src/routes/app.routes';

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <StatusBar style="inverted" />
          <AppRoutes />
        </NavigationContainer>
      </View>
    </ThemeProvider>
  );
}
