import { RouteProp, useRoute } from "@react-navigation/native";
import DetailView from "./Detail.view";
import { useMemo } from "react";
import { RootStackParamList } from "../../navigation/Navigator";
import { PokemonSprites } from "../../model/Pokemon";

export default function DetailViewModel() {
    const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>()

    const pokemon = useMemo(() => route.params.pokemon, [route.params])
    const imageList = useMemo(() => getImageList(pokemon.sprites), [pokemon])

    function getImageList(sprites: PokemonSprites) {
        let result: string[] = [];

        Object.values(sprites).forEach((value: string | PokemonSprites) => {
            if (value && typeof value === 'object')
                result = result.concat(getImageList(value));
            else if (value && !value.endsWith('.svg'))
                result.push(value);
        });

        return result;
    }

    return (
        <DetailView
            pokemon={pokemon}
            imageList={imageList} />
    )
}