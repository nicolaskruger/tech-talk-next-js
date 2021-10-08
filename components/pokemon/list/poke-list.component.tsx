import { FC } from "react";
import styled from "styled-components";
import { Pokemon } from "../../../types/pokemon/pokemon.type";
import { PokemonCard } from "../card/pokemon-card.compoent";

type Props = {
    list: Pokemon[]
}

const Ul = styled.ul`
    display: flex;
    width: 50%;
    flex-wrap: wrap;
    gap: 10px;
    background-color: black;
    padding: 15px;
    border-radius: 10px;
`;

const PokeListComponent: FC<Props> = ({ list }) => {
    return (
        <Ul>
            {list.map(poke => {
                return (
                    <li key={poke.name}>
                        <PokemonCard pokemon={poke} />
                    </li>
                )
            })}
        </Ul>
    )
}

export { PokeListComponent }