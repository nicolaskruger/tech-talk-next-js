import { FC } from "react"
import styled from "styled-components"
import { Pokemon } from "../../../types/pokemon/pokemon.type"
import { ImageC } from "../../image/image.container"

type Props = {
    pokemon: Pokemon
}

const Div = styled.div`
    background-color: ${props => props.theme.backgroundDark};
    color: orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    border-radius: 10px;
    padding: 10px;
`;

const PokemonCard: FC<Props> = ({ pokemon }) => {
    return (
        <Div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <span>
                {pokemon.name}
            </span>
        </Div>
    )
}

export {
    PokemonCard
}