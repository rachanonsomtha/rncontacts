import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native'
import {
    CONTACT_DETAIL,
    CONTACT_LIST,
    CREATE_CONTACT,
    SETTING
} from '../constants/routeNames';

//screens
import Contacts from '../screens/Contacts';
import ContactDetail from '../screens/ContactDetail';
import CreateContact from '../screens/CreateContact';
import Setting from '../screens/Setting';

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator initialRouteName="Contacts">
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail}></HomeStack.Screen>
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name={SETTING} component={Setting}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

export default HomeNavigator