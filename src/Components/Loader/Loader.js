import React from 'react';
import loader from "../../../assets/loader.svg"
import {View, Image, ActivityIndicator} from "react-native";

export const Loader = () => {
    return (
        <View>
            <ActivityIndicator size="large" />
        </View>
    )
}