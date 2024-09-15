import { StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";
import { Dimensions } from "../../styles/Dimensions";

export default StyleSheet.create({
    container: {
        gap: Dimensions.gap.medium,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: Dimensions.borderRadius.medium,
        borderWidth: Dimensions.borderWidth.medium,
        borderColor: Colors.border,
    },
    image: {
        height: 80,
        width: 80
    },
    title: {
        fontSize: Dimensions.fontSize.large,
        fontWeight: '400',
        color: Colors.text,
        textTransform: 'capitalize'
    }
});