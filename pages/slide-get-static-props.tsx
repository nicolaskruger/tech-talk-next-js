import { GetStaticProps, NextPage } from "next";
import { Container, Layout, PptPrevNext, ShowImg, ShowImgPart } from "../components";
import Head from "next/head"
import { Pokemon } from "../types/pokemon/pokemon.type";
import { getPokemons } from "../lib";
import { PokeListComponent } from "../components/pokemon";
import styled from "styled-components";
import { FRONTEND_ROUTES, IMG } from "../constants";

const { GET_STATIC_01, GET_STATIC_02, GET_STATIC_03 } = IMG;

const { STATIC_GENERATION_WITH_DATA: prev, PAGE_PATH_EXTERNAL_DATA: next } = FRONTEND_ROUTES;

const imgList: ShowImgPart[] = [
    {
        src: GET_STATIC_01,
        foreverShow: true,
    },
    {
        src: GET_STATIC_02,
    },
    {
        src: GET_STATIC_03,
    },
];

const Main = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
`;

type Props = {
    list: Pokemon[]
}

const Slide: NextPage<Props> = ({ list }) => {
    return (
        <Layout>
            <Head>
                <title>
                    get static props
                </title>
            </Head>
            <Container>
                <Main>
                    <ShowImg list={imgList} />
                    <PokeListComponent list={list} />
                </Main>
            </Container>
            <PptPrevNext prev={prev} next={next} />
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const list = await getPokemons();

    return {
        props: {
            list
        },
        revalidate: 60
    }
}

export default Slide