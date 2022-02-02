import Home from '../screens/home';
import Leading from '../screens/leading';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
//import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import Third from '../screens/third';
import React from 'react';
//const Tab=createBottomTabNavigator()
import TopTabs from './topnavigator';
const Tab = createMaterialBottomTabNavigator();
export default class BottomTabNavigator extends React.Component{
    render(){
        return (
            
           <Tab.Navigator initialRouteName="TopTabs"   >
            <Tab.Screen  name="TopTabs" component={TopTabs}/>
             <Tab.Screen  name="Home" component={Home}/>
             <Tab.Screen name="Leading" component={Leading}  />
             <Tab.Screen name="Third" component={Third}  />

             </Tab.Navigator>
            
          );
    }
}