import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from '../components/Login';
import { SafeAreaView } from 'react-native-safe-area-context';
import Dashboard from '../components/Dashboard/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
function App() {
    return (
        <NavigationContainer independent={true} style ={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} style ={styles.loginContainer}/>
          <Stack.Screen name="Dashboard" component={Dashboard} style ={styles.loginContainer}/>
        </Stack.Navigator>
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
    },
});

export default App;
