import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {HatBar} from "./src/Components/HatBar/HatBar";
import {SearchBar} from "./src/Components/SearchBar/SearchBar";
import {FilmsContainer} from "./src/Components/Films/FilmsContainer";
import {Provider} from "react-redux";
import store from "./src/redux/store";

export default function App() {

    const filterList = (list) => {
        return list.filter(listItem => listItem.toLowerCase())
    }

    const list = ['The Weeknd', 'Drake', 'Roddy Ricch', 'Dua Lipa'];

    return (
        <Provider store={store}>
            <View>
                <HatBar/>
                <View style={styles.container}>
                    <SearchBar/>
                    <FilmsContainer/>
                </View>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    }
});
