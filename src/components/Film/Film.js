import React from "react";
import {View, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {Text, Button} from 'react-native-paper';
import film_icon from "../../assets/film_icon.png";

const Film = (props) => {
    return(
        <View style={styles.container}>
                <Text style={styles.text}>{props.film.original_title}</Text>
                <Image style={styles.img} source={{uri: `https://image.tmdb.org/t/p/w200/${props.film.poster_path || film_icon}`}}/>
                <Button style={styles.button} mode="contained" onPress={() => props.navigation.navigate('MovieDetails', {id: props.film.id})} title={'click'}>Show more</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 10,
        width: 140,
        backgroundColor: "white",
        borderRadius: 15
    },
    img:{
        width: 100,
        height: 100,
        borderRadius: 15,
        marginBottom: 20
    },
    text:{
        color: "black",
        textAlign: "center"
    },
    button:{
        marginBottom: 10
    }
})

export default Film;
