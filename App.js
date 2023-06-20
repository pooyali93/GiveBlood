import { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GetStarted,
  Home,
  Login,
  OnBoardingStarter,
  OTPValidation,
  Register,
  ResetPassword,
  SuccessValidation, EditProfile} from "./screens";
import BottomTabNavigation from './naviation/BottomTabNavigation';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {

  const [isFirstLunch, setIsFirstLunch] = useState(null)

  useEffect(() =>{
    AsyncStorage.getItem('alreadyLunched').then(value => {
      if(value == null) {
        AsyncStorage.setItem('alreadyLunched', "true");
        setIsFirstLunch(true)
      }else {
        setIsFirstLunch(false)
      }
    })

  },[]);

  const [fontsLoaded] = useFonts({
    black: require('./assets/fonts/Roboto-Black.ttf'),
    bold: require('./assets/fonts/Roboto-Bold.ttf'),
    light: require('./assets/fonts/Roboto-Light.ttf'),
    medium: require('./assets/fonts/Roboto-Medium.ttf'),
    regular: require('./assets/fonts/Roboto-Regular.ttf'),
    thin: require('./assets/fonts/Roboto-Thin.ttf'),
    semiBold: require('./assets/fonts/RobotoCondensed-Bold.ttf'),
    semiBoldLight: require('./assets/fonts/RobotoCondensed-Light.ttf'),
    semiBoldRegular: require('./assets/fonts/RobotoCondensed-Regular.ttf'),
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
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName={isFirstLunch ? "OnBoardingStarter" : "GetStarted" }>
        <Stack.Screen
          name="OnBoardingStarter"
          component={OnBoardingStarter}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BottomTabNavigation"
          component={BottomTabNavigation}
          options={{
            headerShown: false,
          }}

        />


        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OTPValidation"
          component={OTPValidation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SuccessValidation"
          component={SuccessValidation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
