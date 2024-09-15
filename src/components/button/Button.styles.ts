import { StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";
import { Dimensions } from "../../styles/Dimensions";

export default StyleSheet.create({
    container: {
        paddingHorizontal: Dimensions.padding.medium,
        borderRadius: Dimensions.borderRadius.medium,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.button
    },
    text: {
        fontSize: Dimensions.fontSize.extraSmall,
        color: Colors.textButton
    }
});