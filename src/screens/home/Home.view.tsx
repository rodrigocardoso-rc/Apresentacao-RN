import { FlatList, TextInput, View } from 'react-native';

import { Pokemon } from '../../model/Pokemon';
import { Button, PokemonCard, NoContentList } from '../../components';

import styles, { placeholder } from './Home.styles'

interface HomeViewProps {
    searchValue: string;
    pokemonList: Pokemon[];
    isLoadingList: boolean;
    isLoadingPokemon: boolean;

    onPressSearch: () => void;
    onChangeSearch: (value: string) => void;
    onPressCard: (pokemon: Pokemon) => void;
}

interface IRenderCardPokemon {
    item: Pokemon;
    index: number;
}

export default function HomeView(props: HomeViewProps) {
    const {
        searchValue,
        pokemonList,
        isLoadingList,
        isLoadingPokemon,
        onPressSearch,
        onChangeSearch,
        onPressCard,
    } = props

    function renderItem({ item }: IRenderCardPokemon) {
        return (
            <PokemonCard
                title={item.name}
                image={item.sprites.front_default || ''}
                onPress={() => onPressCard(item)}
            />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapSearch}>
                <TextInput
                    value={searchValue}
                    placeholder='Digite o nome do pokemon'
                    onChangeText={onChangeSearch}
                    onSubmitEditing={onPressSearch}
                    placeholderTextColor={placeholder}
                    style={styles.input} />

                <Button
                    text='Buscar'
                    isLoading={isLoadingPokemon}
                    onPress={onPressSearch} />
            </View>

            <FlatList
                data={pokemonList}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                style={styles.listStyle}
                contentContainerStyle={styles.listContentContainer}
                ListEmptyComponent={
                    <NoContentList
                        message='Nenhum pokemon encontrado'
                        isLoading={isLoadingList} />
                } />
        </View>
    );
}
