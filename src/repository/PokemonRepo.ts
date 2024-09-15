import { httpGet, BASE_URL } from "./../modules/restApi/RestApi";
import { Pokemon } from "./../model/Pokemon";

interface ListPokemon {
    count: number;
    next: string;
    previous: string[];
    results: PokemonNameList[]
}

export interface PokemonNameList {
    name: string;
    uri: string
}

function PokemonRepo() {
    const POKEMON_URL = `${BASE_URL}/pokemon`

    function getPokemonByName(name: string): Promise<Pokemon> {
        const url = `${POKEMON_URL}/${name}`

        return httpGet(url)
    }

    function getPokemonList(limit: number = 9) {
        const url = `${POKEMON_URL}?limit=${limit}`

        return httpGet<ListPokemon>(url)
    }

    return { getPokemonByName, getPokemonList }
}

export default PokemonRepo()