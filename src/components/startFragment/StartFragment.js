import React from "react";
import {View, Image, StyleSheet, Text} from 'react-native';
import hacker from "../../assets/hacker.jpg";

const StartFragment = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={hacker}/>
            <Text style={styles.text}>Enter something to start...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    img:{
        width: 150,
        height: 150,
        borderRadius: 15,
        marginBottom: 20
    },
    text:{
        fontFamily: "monospace",
        fontSize: 25,
        textAlign: "center",
        color: "white",
    }
})

export default StartFragment;
