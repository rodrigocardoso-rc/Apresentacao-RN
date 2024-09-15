import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Pokemon } from "../../model/Pokemon";
import PokemonRepo from "../../repository/PokemonRepo";
import { NameScreens, RootStackParamList } from "../../navigation/Navigator";

import HomeView from "./Home.view";
import { showMessage } from "react-native-flash-message";

export default function HomeViewModel() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const [searchValue, setSearchValue] = useState('')
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])
    const [isLoadingList, setIsLoadingList] = useState(false)
    const [isLoadingPokemon, setIsLoadingPokemon] = useState(false)

    useEffect(() => { getPokemonList() }, [])

    function onChangeSearch(value: string) {
        setSearchValue(value)
    }

    function onPressSearch() {
        if (!searchValue)
            return

        setIsLoadingPokemon(true)

        PokemonRepo.getPokemonByName(searchValue.toLowerCase())
            .then(res => {
                navigateToDetail(res)
            })
            .catch(err => {
                console.log("Error, HomeViewModel#onPressSearch =>", err)

                showMessage({
                    message: "Pokemon não encontrado ;-;",
                    description: "Por favor, confira se o nome está correto.",
                    type: "warning",
                });
            }).finally(() => {
                setIsLoadingPokemon(false)
            });
    }

    async function getPokemonList() {
        setIsLoadingList(true)

        try {
            const listNamePokemon = (await PokemonRepo.getPokemonList()).results
            const promiseList = listNamePokemon.map(item => PokemonRepo.getPokemonByName(item.name))

            const list = await Promise.all(promiseList)
            setPokemonList(list)
        } catch (err) {
            console.log("Error, HomeViewModel#getPokemonList =>", err)

            showMessage({
                message: "Não foi possível buscar a listagem de pokemons ;-;",
                description: "Por favor, confira se está conectado a internet.",
                type: "warning",
            });
        } finally {
            setIsLoadingList(false)
        }
    }

    function navigateToDetail(pokemon: Pokemon) {
        navigation.navigate(NameScreens.Detail, { pokemon });
    }

    return (
        <HomeView
            searchValue={searchValue}
            pokemonList={pokemonList}
            isLoadingList={true}
            isLoadingPokemon={isLoadingPokemon}
            onPressSearch={onPressSearch}
            onChangeSearch={onChangeSearch}
            onPressCard={navigateToDetail}
        />
    )
}