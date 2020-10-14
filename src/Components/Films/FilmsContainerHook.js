import React,{useEffect} from "react";
import {setFetchingAC, setFilmsAC, fetchFilmsTC} from "../../redux/searchReducer";
import {connect} from "react-redux";
import {filmsAPI} from "../../api/api";
import {Films} from "./Films";
import {Loader} from "../Loader/Loader";
import {View} from "react-native";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';

export const FilmsContainer = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => {
    return {
      films: state.searchFilms.films,
      isFetching: state.searchFilms.isFetching,
    }
  });

  // this.props.isFetching same is
  // state.isFetching

  // = componentDidMount()
  useEffect(() => {
    dispatch(fetchFilmsTC());
  }, []);

  // = componentDidUpdate(prev, next)
  // useEffect(() => {
  //   // some action
  // }, [props]);

  return (
    <View>
        {this.props.isFetching ? <Loader/> : null}
        <Films films={this.props.films}
               isFetching={this.props.isFetching}
               toggleFetching={this.props.toggleFetching}/>
    </View>
)
}

