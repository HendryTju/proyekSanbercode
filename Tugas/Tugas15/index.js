import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginScreen from '../Tugas13/LoginScreen';
import AboutScreen from '../Tugas13/AboutScreen';
import SkillScreen from '../Tugas14/SkillScreen';
import { Icon } from 'react-native-vector-icons/MaterialIcons';

const AuthStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const DrawerStack = createDrawerNavigator();
const RootStack = createStackNavigator();

const AuthStackScreen=()=>(
    <AuthStack.Navigator>
        <AuthStack.Screen name="LoginScreen" 
        component={LoginScreen}
        options={{
            headerShown:false
        }}
        />
    </AuthStack.Navigator>
);

const DrawerStackScreen=()=>(
    <DrawerStack.Navigator>
        <DrawerStack.Screen name="Login Screen" component={LoginScreen}/>
        <DrawerStack.Screen name="About Screen" component={AboutScreen}/>
        <DrawerStack.Screen name="Dashboard" component={BottomTabsScreen}/>
    </DrawerStack.Navigator>
);

const BottomTabsScreen=()=>(
    <BottomTab.Navigator
    style={style.BottomTabs}>
        <BottomTab.Screen name="Skill Screen" component={SkillScreen}/>
    </BottomTab.Navigator>
);


const style = StyleSheet.create({
    BottomTabs:{
        position:'absolute',
        fontSize:20,
        fontWeight:'bold'
    }
});

export default class AppNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <RootStack.Navigator>
                    {/* <RootStack.Screen 
                    name="Auth"
                    component={AuthStackScreen}
                    options={{
                        headerShown:false
                    }}/>
                     */}
                    <RootStack.Screen
                    name="DrawerStack"
                    component={DrawerStackScreen}
                    options={{
                        headerShown:false
                    }}/>

                    <RootStack.Screen
                    name="BottomTabs"
                    component={BottomTabsScreen}/>
                </RootStack.Navigator>
            </NavigationContainer>
        )
    }
}