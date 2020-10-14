import React from "react";
import {StyleSheet,View,Text} from "react-native";


export const HatBar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>List of films</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: "#3939",
        height: 70,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 10
    },
    text: {
        color: "#FFF",
        fontSize: 20
    }
})