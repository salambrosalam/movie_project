import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import {showDescriptionTC} from '../../android/app/src/redux/movieReducer';
import {useDispatch, useSelector} from 'react-redux';
import heart from '../assets/heart_2.png';
import empty_heart from "../assets/empty_heart.png";


const MovieDetails = ({route}) => {

    // let [filmDetails, setFilmDetails] = useState({
    //     filmId: route.params.id,
    // });

    const dispatch = useDispatch();

    // const id = filmDetails.filmId;

    useEffect(() => {

        dispatch(showDescriptionTC(route.params.id));

    }, []);

    const state = useSelector((state) => state);

    console.log(route.params.id);
    // console.log('localState: ', filmDetails.filmId);
    console.log('filmDetailsObject: ', state.FilmDetails);

    const calculateHandler = () => {
        const popularity = Math.round(state.FilmDetails.vote_average);

        let popularityItems = [];
        for (let i = 1; i <= popularity; i++) {
            popularityItems.push(1);
        }
        return popularityItems;
    }

    const calculateEmptyHearts = () => {
        const popularity = Math.round(state.FilmDetails.vote_average);

        const popularity_empty = 10 - popularity;
        const popularity_empty_items = [];
        for (let i = 1; i <= popularity_empty; i++) {
            popularity_empty_items.push(1);
        }
        return popularity_empty_items;
    }


    if (state.isFetching) {
        return <View style={styles.container}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>;
    }
    return (
        <ScrollView style={styles.container}>
            {state.FilmDetails ?
            <View style={styles.wrapper}>
                <Image style={styles.img} source={{uri: `https://image.tmdb.org/t/p/w200/${state.FilmDetails.poster_path}`}}/>
                <Text>{route.params.id}</Text>
                <Text style={styles.header}>{state.FilmDetails.original_title}</Text>
                <View style={styles.overviewContainer}>
                    <Text style={styles.textOverview}>{state.FilmDetails.overview}</Text>
                </View>
                <Text style={styles.text}>{route.params.id}</Text>
                <Text style={styles.text}>Popularity:</Text>
                <View style={styles.voteContainer}>
                    {calculateHandler().map(item => <Image style={styles.rankImage} source={heart}/>)}
                    {calculateEmptyHearts().map(item => <Image style={styles.rankImage} source={empty_heart}/>)}
                </View>
            </View>
             : null}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#282c34',
        flex: 1,
        flexDirection: 'column',
    },
    img: {
        marginTop: 30,
        width: 250,
        height: 250,
        borderRadius: 15,
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
    textOverview: {
        flex: 0.9,
        color: 'white',
        fontSize: 18,
    },
    overviewContainer: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: "center",
        borderRadius: 15,
        backgroundColor: 'black',
        marginHorizontal: 20,
        padding: 15,
    },
    header: {
        fontSize: 25,
        color: 'white',
        textAlign:"center"
    },
    voteContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rankImage: {
        width: 30,
        height: 30,
    },
    wrapper:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"

    }

});

export default MovieDetails;
