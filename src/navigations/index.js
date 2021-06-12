import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';

const AppNavContainer = () => {

    const { authState: { isLoggedIn }, } = useContext(GlobalContext);

    console.log('state : >> ', isLoggedIn)
    return (
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
            {/* <HomeNavigator /> */}
            {/* <DrawerNavigator /> */}
        </NavigationContainer>
    )
}

export default AppNavContainer