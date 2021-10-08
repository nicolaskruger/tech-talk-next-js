import { BACKEND_ROUTE, BACKEND_URL } from "../../constants";
import { PokeListDto } from "../../dto";
import { axiosApi } from "../axios/axios.api"
import axios, { AxiosResponse } from "axios"
import { Pokemon } from "../../types/pokemon/pokemon.type";


type QueryPokemon = {
    offset: number,
    limit: number
}

const { POKEMON } = BACKEND_ROUTE;

const pokemonApi = () => {
    const instance = axiosApi(BACKEND_URL);

    const page = async (query: QueryPokemon): Promise<PokeListDto> => {
        const response: AxiosResponse<PokeListDto> = await instance.get(POKEMON, {
            params: {
                ...query
            }
        })
        return response.data;
    }

    const pokemonUrl = async (url: string): Promise<Pokemon> => {
        const response: AxiosResponse<Pokemon> = await axios.get(url);

        return response.data;
    }

    return {
        page,
        pokemonUrl
    }
}

export {
    pokemonApi
}