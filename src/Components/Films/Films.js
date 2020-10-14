import React from "react";
import {View} from "react-native";
import {Film} from "./Film/Film";

export const Films = (props) => {

    return (
        <View>

            {props.films.map((film) => {
                return(
                    <Film name={film.title} icon={film.poster_path}/>
                )
            })}
        </View>
    )
}

