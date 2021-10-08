import { PokemonDto } from "../pokemon/pokemon.dto";

type PokeListDto = {
    count: number,
    next: string,
    previous: string,
    results: PokemonDto[],
}

export type {
    PokeListDto
}