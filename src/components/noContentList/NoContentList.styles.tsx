import { StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";
import { Dimensions } from "../../styles/Dimensions";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    text: {
        fontSize: Dimensions.fontSize.large,
        color:  Colors.placeholder,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});