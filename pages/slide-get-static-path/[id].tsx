import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import styled from "styled-components";
import { Container, Layout, PptPrevNext } from "../../components";
import { ImageC } from "../../components/image/image.container";
import { PokemonCard } from "../../components/pokemon/card/pokemon-card.compoent";
import { FRONTEND_ROUTES, IMG } from "../../constants";
import { getPokemonByName, getPokemonDto } from "../../lib";
import { Pokemon } from "../../types/pokemon/pokemon.type";
import Link from 'next/link';

type Props = {
    pokemon: Pokemon
}

const { PAGE_PATH_EXTERNAL_DATA: prev, GET_STATIC_PATH_POKEMON, SERVER_SIDE_RENDER: next } = FRONTEND_ROUTES;

const { STATIC_PATH } = IMG;

const size = 500;

const pokemons = [
    'bulbasaur',
    'charmander',
    'squirtle'
]

const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 100vh;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: blue;
`;

const Slide: NextPage<Props> = ({ pokemon }) => {
    return (
        <Layout>
            <Container>
                <Main>
                    <Div>
                        <ImageC src={STATIC_PATH} wwidth={size} wheigth={250} />
                        <Ul>
                            {pokemons.map(poke => (
                                <li key={poke}>
                                    <Link href={GET_STATIC_PATH_POKEMON(poke)}>
                                        {GET_STATIC_PATH_POKEMON(poke)}
                                    </Link>
                                </li>
                            ))}
                        </Ul>
                    </Div>
                    <PokemonCard pokemon={pokemon} />
                </Main>
            </Container>
            <PptPrevNext prev={prev} next={next} />
        </Layout>
    )
}

type Path = {
    id: string,
}

// pages/slide-get-static-path/[id].tsx

export const getStaticPaths: GetStaticPaths<Path> = async () => {
    const paths = await getPokemonDto();

    return {
        paths: paths.map(path => ({
            params: { id: path.name, pokemon: path }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<Props, Path> = async ({ params }) => {

    const pokemon = await getPokemonByName(params?.id as string);

    return {
        props: {
            pokemon: pokemon
        }
    };
}

export default Slide