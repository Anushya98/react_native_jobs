import React from 'react'
import Login from '../components/Login';
import Dashboard from '../components/Dashboard/Dashboard';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfilePage from '../Screens/ProfilePage';
import Project from '../Screens/Project';
import Task from '../Screens/Task';
import CustomDrawer from '../app/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

function Appstack() {
    return (

        // <Stack.Navigator screenOptions={{headerShown:false}}
        <Drawer.Navigator drawerContent = {props => <CustomDrawer {...props}/>}>
            {/* <Stack.Screen name="Login" component={Login} style={styles.loginContainer} /> */}
            <Drawer.Screen name="Dashboard" component={Dashboard} style={styles.loginContainer} 
            options ={{
                drawerIcon: ({color}) => (
                    <Ionicons name='home-outline' size={22} color={color}/>
                )
            }}/>
            <Drawer.Screen name="ProfilePage" component={ProfilePage} style={styles.loginContainer} 
            options ={{
                drawerIcon: ({color}) => (
                    <Ionicons name='person-outline' size={22} color={color}/>
                )
            }}/>
            <Drawer.Screen name="Project" component={Project} style={styles.loginContainer} 
            options ={{
                drawerIcon: ({color}) => (
                    <Ionicons name='chatbox-ellipses-outline' size={22} color={color}/>
                )
            }}/>
            <Drawer.Screen name="Task" component={Task} style={styles.loginContainer} 
            options ={{
                drawerIcon: ({color}) => (
                    <Ionicons name='settings-outline' size={22} color={color}/>
                )
            }}/>

        </Drawer.Navigator>

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


export default Appstack