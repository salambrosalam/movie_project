import React from "react";
import {setFetchingAC, setFilmsAC, fetchFilmsTC} from "../../redux/searchReducer";
import {connect} from "react-redux";
import {filmsAPI} from "../../api/api";
import {Films} from "./Films";
import {Loader} from "../Loader/Loader";
import {View} from "react-native";
import axios from "axios";

class FilmsContainerAPI extends React.Component {

    componentDidMount() {
      // const { toggleFetching, setFilms } = this.props;
      //   toggleFetching(true);
        // axios.get("https://api.themoviedb.org/4/list/1?page=1&api_key=5e595d34415399e183054782a7f38231").then(response => {
        //   toggleFetching(false);
        //   setFilms(response.data.results);
        // })
      this.props.fetchFilms();
    }

    render() {
      console.log(this.props);
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
// state = {
//   searchFilms: {
//     films: [],
//     isFetching: true
//   }
// }

// state: {searchFilms: {films, isFetching}}


let mapStateToProps = (state) => {
  console.log('state', state);
    return {
        films: state.searchFilms.films,
        isFetching: state.searchFilms.isFetching,
    }
}

const mapDispatchToProps = (dispatch) => ({
  // setFilms: () => dispatch(setFilmsAC()),
  // toggleFetching: () => dispatch(setFetchingAC()),
  fetchFilms: () => dispatch(fetchFilmsTC()),
})


export const FilmsContainer = connect(mapStateToProps, mapDispatchToProps)(FilmsContainerAPI)


