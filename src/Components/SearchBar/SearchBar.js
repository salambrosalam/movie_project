import React from "react";
import {View,TextInput,StyleSheet} from "react-native";

export const SearchBar = () => {
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                autoCorrect={false}
                placeholder="Enter the name of film..."
            />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15
    },
    input: {
        width: "70%",
        borderStyle: "solid",
        borderBottomWidth: 2,
        padding: 10,
        borderBottomColor: "#3949"
    }
})