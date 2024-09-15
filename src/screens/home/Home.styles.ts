import { StyleSheet } from "react-native";
import { Colors } from "../../styles/Colors";
import { Dimensions } from "../../styles/Dimensions";

export const loadingColor = Colors.loading
export const placeholder = Colors.placeholder

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: Dimensions.padding.large,
        backgroundColor: Colors.screenBackground
    },
    wrapSearch: {
        flexDirection: 'row',
        gap: Dimensions.gap.small
    },
    input: {
        flex: 1,
        borderWidth: 2,
        borderColor: Colors.border,
        borderRadius: Dimensions.borderRadius.medium,
        paddingLeft: Dimensions.padding.medium,
        color: Colors.text,
        fontSize: Dimensions.fontSize.extraSmall
    },
    listStyle: {
        marginTop: Dimensions.margin.large
    },
    listContentContainer: {
        gap: Dimensions.gap.medium,
    },
});