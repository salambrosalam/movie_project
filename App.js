import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
    View,
    StyleSheet,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import Home from './src/Screens/Home';
import MovieDetails from './src/Screens/MoviesDetails';
import store from './src/redux/redux_store';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <PaperProvider>
                    <Stack.Navigator>
                        <Stack.Screen name={'Home'} component={Home}/>
                        <Stack.Screen name={'MovieDetails'} component={MovieDetails}/>
                    </Stack.Navigator>
                </PaperProvider>
            </Provider>
        </NavigationContainer>
    );
};

export default App;
