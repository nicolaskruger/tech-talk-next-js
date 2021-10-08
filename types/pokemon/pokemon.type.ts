type Pokemon = {
    name: string,
    base_experience: number,
    sprites: {
        back_default: string,
        front_default: string
    }
    abilities: Ability[],
}
type Ability = {
    ability: {
        name: string
    }
}

export type {
    Pokemon
}