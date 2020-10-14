import axios from 'axios';

const SET_FILMS = "SET_FILMS";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";

let initialState = {
    films: [],
    isFetching: false
}

// const action = {
//   type: 'keys',
//   payload: '',
// }

export const searchReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_FILMS:
            return{
                ...state,
                films: payload.films
            }
        case TOGGLE_FETCHING:
            return{
                ...state,
                isFetching: payload.isFetching
            }
        default:
            return state;
    }
}

const setFilmsAC = (films) => {
    return {
        type: SET_FILMS,
        payload: films
    }
}

const setFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_FETCHING,
        payload: isFetching,
    }
}

export const fetchFilmsTC = () => async dispatch => {
  dispatch(setFilmsAC(true));
  try {
    // axios.get().then(response => response.data); the same as below
    const {data} = await axios.get("https://api.themoviedb.org/4/list/1?page=1&api_key=5e595d34415399e183054782a7f38231");
    dispatch(setFetchingAC(data));
  } catch (e) {
    console.log('Error', e);
  }
  dispatch(setFilmsAC(false));
};