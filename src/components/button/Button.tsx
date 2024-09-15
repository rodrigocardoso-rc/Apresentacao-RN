import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import styles from './Button.styles'

interface ButtonProps {
    text: string;
    isLoading?: boolean;

    onPress: () => void;
}

export default function Button(props: ButtonProps) {
    const { text, isLoading, onPress } = props;

    const ContentButton = () => isLoading ? (
        <ActivityIndicator size={36} color={'white'} />
    ) : (
        <Text style={styles.text}>{text}</Text>
    )

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
            disabled={isLoading}>
            <ContentButton />
        </TouchableOpacity>
    )
}