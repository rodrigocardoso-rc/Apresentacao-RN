import { FlatList, Text, View } from "react-native";

import { Pokemon } from "../../model/Pokemon";
import { ImageCard, NoContentList } from "./../../components"
    ;
import styles from './Detail.styles'

interface DetailViewProps {
    pokemon: Pokemon;
    imageList: string[]
}

interface IRenderImages {
    item: string;
    index: number;
}

export default function DetailView(props: DetailViewProps) {
    const { pokemon, imageList } = props;

    function renderItem({ item }: IRenderImages) {
        return (
            <ImageCard uri={item} />
        )
    }

    const HeaderComponent = (
        <View>
            <Text style={styles.title}>{pokemon.name}</Text>
            <Text style={styles.atributes}>Altura: {pokemon.height / 10}m</Text>
            <Text style={styles.atributes}>Peso: {pokemon.weight / 10} kg</Text>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={HeaderComponent}
                data={imageList}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                numColumns={3}
                keyExtractor={item => item}
                contentContainerStyle={styles.listContent}
                columnWrapperStyle={styles.listWrapper}
                ListEmptyComponent={
                    <NoContentList message={`Nenhuma imagem encontrada para ${pokemon.name}`} />
                } />
        </View>
    )
}