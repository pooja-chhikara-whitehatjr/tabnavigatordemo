import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './component/bottomtabs';
//import TopTabs from './component/topnavigator';

export default class  App extends React.Component {
  render(){
  return (
    <NavigationContainer headerShown="false">
<BottomTabNavigator/>

    </NavigationContainer>
  
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
