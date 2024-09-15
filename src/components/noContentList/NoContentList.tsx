import { ActivityIndicator, Text, View } from "react-native";
import styles from './NoContentList.styles'

interface NoContentProps {
    isLoading?: boolean;
    message: string;
}

export default function NoContentList(props: NoContentProps) {
    const { isLoading, message } = props;

    return (isLoading ? (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={'black'} />
        </View>
    ) : (
        <View style={styles.container}>
            <Text style={styles.text}>{message}</Text>
        </View>
    )

    )
}