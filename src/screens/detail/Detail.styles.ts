import { StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";
import { Dimensions } from "../../styles/Dimensions";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: Dimensions.padding.large
    },
    headerContainer: {
        gap: Dimensions.gap.small,
    },
    title: {
        fontSize: Dimensions.fontSize.extraLarge,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: Colors.title
    },
    atributes: {
        fontSize: Dimensions.fontSize.medium,
        fontWeight: '400',
        color: Colors.text
    }
});