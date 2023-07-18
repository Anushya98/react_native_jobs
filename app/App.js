import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from '../components/Login';
import { SafeAreaView } from 'react-native-safe-area-context';
import Dashboard from '../components/Dashboard/Dashboard';

function App() {
    return (
        <SafeAreaView style = {styles.container}>
            <View >
                <Login style ={styles.loginContainer}/>
            </View>
            <View >
                <Dashboard />
            </View>

        </SafeAreaView>
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
