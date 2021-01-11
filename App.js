import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {Provider}from 'react-redux';

import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux /store';



export default function App() {
  let [fontsLoaded] = useFonts({
    'Ubuntu':require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Bold':require('./assets/fonts/Ubuntu-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
   <Provider store={store}>
<AppNavigator/>
   </Provider>
  );
}
}
const styles = StyleSheet.create({
 
});
