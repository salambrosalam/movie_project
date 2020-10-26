import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {getFilmsTC} from '../../android/app/src/redux/movieReducer';
import {useDispatch, useSelector} from 'react-redux';
import Film from '../components/Film/Film';
import StartFragment from '../components/startFragment/StartFragment';

const Home = (props) => {

    const [params, setParams] = useState({
        query: '',
        page: 1,
    });

    const changeHandler = (text) => {
        console.log(text);
        setParams(prevState => (
            {
                ...prevState,
                query: text,
            }
        ));
    };

    const dispatch = useDispatch();
    useEffect(() => {
            if (params.query !== '') {
                dispatch(getFilmsTC(params.query, params.page));
            }
        }
        , [params.query, setParams]);

    const state = useSelector((state) => state);

    const nextPageHandler = () => {
        if (params.page < state.totalPages) {
            dispatch(getFilmsTC(params.query, params.page + 1));
            setParams(prevParams => (
                {
                    ...prevParams,
                    page: prevParams.page + 1,
                }
            ));
        }
    };
    console.log(state.totalPages);

    if (state.isFetching) {
        return <View style={styles.container}>
            <Searchbar style={styles.search} onChangeText={text => changeHandler(text)}/>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>;
    }
    return (
        <View style={styles.container}>
            <Searchbar style={styles.search} onChangeText={text => changeHandler(text)}/>
            {params.query !== '' ?
                <FlatList
                    data={state?.films}
                    numColumns={2}
                    renderItem={({item}) => <Film navigation={props.navigation} film={item}
                                                  isFetching={state.isFetching}/>}
                    keyExtractor={item => item.id}
                    onEndReached={() => nextPageHandler()}
                /> : <StartFragment/>}

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#282c34',
        flex: 1,
        alignItems: 'center',
    },
    search:{
        marginTop: 10
    }
});

export default Home;
