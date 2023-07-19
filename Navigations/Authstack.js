import React from 'react'
import Login from '../components/Login';
import Dashboard from '../components/Dashboard/Dashboard';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';


const Stack = createStackNavigator();

function Authstack() {
    return (

        // <Stack.Navigator screenOptions={{headerShown:false}}
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} style={styles.loginContainer} />
            <Stack.Screen name="Dashboard" component={Dashboard} style={styles.loginContainer} />
        </Stack.Navigator>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    loginContainer: {
        justifyContent: 'center',
        alignItems: "center",
    },
});


export default Authstack