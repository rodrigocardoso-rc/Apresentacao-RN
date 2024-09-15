import { StyleSheet, Dimensions as DimensionsRn } from "react-native";
import { Colors } from "../../styles/Colors";
import { Dimensions } from "../../styles/Dimensions";

const imageSize = DimensionsRn.get("screen").width / 3.6

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: Dimensions.borderRadius.large,
        borderWidth: Dimensions.borderWidth.large,
        borderColor: Colors.border,
    },
    image: {
        height: imageSize,
        width: imageSize,
    }
});