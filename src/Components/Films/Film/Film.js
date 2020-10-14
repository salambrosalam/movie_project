import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";
import film_icon from "../../../../assets/film_icon.png"


export const Film = (props) => {
    return (
        <View>
            <Image style={styles.icon} source={props.icon}/>
            <Text style={styles.text} >{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    icon:{
        width: 100,
        height: 100,
        borderWidth: 3,
        borderStyle: "solid",
        borderRadius: 10
    },
    text:{
        fontSize: 20
    }
})