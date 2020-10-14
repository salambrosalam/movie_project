import React from "react";
import {setFetchingAC, setFilmsAC} from "../../redux/searchReducer";
import {connect} from "react-redux";
import {filmsAPI} from "../../api/api";
import {Films} from "./Films";
import {Loader} from "../Loader/Loader";
import {View} from "react-native";
import axios from "axios";

class FilmsContainerAPI extends React.Component {

    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get("https://api.themoviedb.org/4/list/1?page=1&api_key=5e595d34415399e183054782a7f38231").then(response => {
            console.log(response.data)
            this.props.toggleFetching(false);
            this.props.setFilms(response.data.results)
            debugger;

        })
    }

    render() {
        return (
            <View>
                {this.props.isFetching ? <Loader/> : null}
                <Films films={this.props.films}
                       isFetching={this.props.isFetching}
                       toggleFetching={this.props.toggleFetching}/>
            </View>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        films: state.films,
        isFetching: state.isFetching
    }
}

export const FilmsContainer = connect(mapStateToProps, {
    setFilms: setFilmsAC,
    toggleFetching: setFetchingAC
})(FilmsContainerAPI)


