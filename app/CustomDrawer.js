import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons'




const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}
                contentContainerStyle={{ backgroundColor: '#FFC0CB' }}>
                {/* <ImageBackground source={require("../assets/images/small/img-3.jpg")} style={{ padding: "20" }} >
                    <Image source={require("../assets/images/users/avatar-1.jpg")} style={{ width: "80", height: "80", borderRadius: "40", marginBottom: "10" }} />
                </ImageBackground> */}
                <View>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View>
                <Text> Our Custom text </Text>
            </View>
        </View>

    )
}

export default CustomDrawer