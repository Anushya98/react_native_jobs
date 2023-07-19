import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from '../components/Login';
import { SafeAreaView } from 'react-native-safe-area-context';
import Dashboard from '../components/Dashboard/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Authstack from '../Navigations/Authstack';
import Appstack from '../Navigations/Appstack';


const Stack = createStackNavigator();
function App() {
    return (
        <NavigationContainer independent={true} style={styles.container}>
            {/* <Authstack /> */}
            <Appstack/>
        </NavigationContainer>
    );
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

export default App;
