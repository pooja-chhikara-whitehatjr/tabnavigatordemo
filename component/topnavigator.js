import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Contact from '../screens/contacts';
import Details from '../screens/Details';
import Xyz from '../screens/Xyz';
const Tab = createMaterialTopTabNavigator();

export default class TopTabs extends React.Component {
    render(){
  return (
    <Tab.Navigator initialRouteName='Contacts'>
      <Tab.Screen name="Contacts" component={Contact} />
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Xyz" component={Xyz} />
    </Tab.Navigator>
  );
}
}