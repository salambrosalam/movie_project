import * as axios from "axios"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

const API_KEY = "5e595d34415399e183054782a7f38231"

export const filmsAPI = {
    searchFilms(query,page = 1){
        return(
            instance.get(`/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`)
        )
    },
    getFilmById(filmId){
        return(
            instance.get(`/movie/${filmId}?api_key=${API_KEY}`)
        )
    }
}
