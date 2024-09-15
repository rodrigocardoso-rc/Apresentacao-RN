import { Image, Text, TouchableOpacity } from "react-native";
import styles from "./PokemonCard.styles";

interface PokemonCardProps {
    title: string;
    image: string;

    onPress: () => void;
}

export default function PokemonCard(props: PokemonCardProps) {
    const { title, image, onPress } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}>
            <Image
                source={{ uri: image }}
                style={styles.image} />

            <Text
                numberOfLines={1}
                style={styles.title}
                children={title} />
        </TouchableOpacity>
    )
}