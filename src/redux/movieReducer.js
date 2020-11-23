import {filmsAPI} from '../api/api';
const SEARCH_FILM = "SEARCH_FILM";
const NEXT_PAGE = "NEXT_PAGE";
const SHOW_DESCRIPTION = "SHOW_DESCRIPTION";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const SET_FILM_DETAILS = "SET_FILM_DETAILS";

const initialState = {
    films:[],
    currentFilm: null,
    isFetching:false,
    totalPages:null,
    error:null,
    FilmDetails: null

}

export const movieReducer = (state = initialState, action) =>{
    switch (action.type){
        case SEARCH_FILM:
            return{
                ...state,
                films: action.payload.results,
                totalPages: action.payload.total_pages
            }
        case NEXT_PAGE:
            return{
                ...state,
                films: [...state.films, ...action.payload]
            }
        case TOGGLE_FETCHING:
            return{
                ...state,
                isFetching: action.payload
            }
        case SET_FILM_DETAILS:
            return{
                ...state,
                FilmDetails: action.payload
            }
        default:
            return state
    }
}

export const searchFilmAC = (data) => {
    return {
        type: SEARCH_FILM,
        payload: data
    }
}

export const nextPageFilmsAC = (data) => {
    return{
        type: NEXT_PAGE,
        payload: data
    }
}

export const toggleFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_FETCHING,
        payload: isFetching
    }
}

export const setFilmDetailsAC = (filmDetails) => {
    return{
        type: SET_FILM_DETAILS,
        payload: filmDetails
    }
}

export const showDescriptionTC = (filmId) => async dispatch => {
    try{
        dispatch(toggleFetchingAC(true))
        const response = await filmsAPI.getFilmById(filmId)
        dispatch(setFilmDetailsAC(response.data))
        console.log(response.data)
    }catch (e){
        console.log(e)
    }
    dispatch(toggleFetchingAC(false))
}

export const getFilmsTC = (query,page) => async dispatch => {
    try{
        dispatch(toggleFetchingAC(true))
        const response = await filmsAPI.searchFilms(query,page)
        if(page === 1){
            dispatch(searchFilmAC(response.data))
        }else{
            dispatch(toggleFetchingAC(false))
            dispatch(nextPageFilmsAC(response.data.results))
        }
        dispatch(toggleFetchingAC(false))
    }catch (e){
        console.log(e)
    }
}

