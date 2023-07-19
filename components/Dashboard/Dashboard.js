import React from 'react'
import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native-web'

function Dashboard() {
    return (
        <View style={styles.container}>
            <Text>
                Hello , this is your Dashboard page
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

})


export default Dashboard