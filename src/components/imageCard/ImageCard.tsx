import { Image, View } from "react-native";
import styles from "./ImageCard.styles";

export default function ImageCard({ uri }: { uri: string }) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri }}
                resizeMode="contain"
                style={styles.image} />
        </View>
    )
}