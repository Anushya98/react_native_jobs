import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native-web";
import { FontAwesomes } from '@expo/vector-icons'

export default class Screen extends React.Component {
    render() {
        return (
            <View>
                <SafeAreaView style={{ flex: 1 }}>

                    <TouchableOpacity 
                    style={{ alignItems: "flex-end", margin: 16 }}
                    onPress = {this.props.navigation.openDrawer}>
                        <FontAwesomes name="bars" size ={24} color ="#161924" />
                    </TouchableOpacity>
                    <View style={{flex: 1, alignItems:"center", justifyContent:"center"}}>
                        <Text style={styles.text}>{this.props.name}Screen</Text>
                    </View>

                </SafeAreaView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"FFF"
    },
    text: {
        color:"#161924",
        fontSize:20,
        fontWeight:'500'
    }
}

)