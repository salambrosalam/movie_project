import loader from "../../../assets/loader.svg"
import {View, Image} from "react-native";

export const Loader = () => {
    return (
        <View>
            <Image source={loader}/>
        </View>
    )
}