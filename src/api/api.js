import * as axios from "axios"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/4/list/1?api_key=5e595d34415399e183054782a7f3823"
})

export const filmsAPI = {
    getFilms(){
        return(
            instance.get()
        )
    }
}