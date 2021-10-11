import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { Container, Layout, PptPrevNext, ShowImg, ShowImgPart } from "../components";
import Head from "next/head"
import { Pokemon } from "../types/pokemon/pokemon.type";
import { getPokemons } from "../lib";
import { PokeListComponent } from "../components/pokemon";
import styled from "styled-components";
import { FRONTEND_ROUTES, IMG } from "../constants";

const { GET_SERVER_01, GET_SERVER_02, GET_SERVER_03 } = IMG;

const { SERVER_SIDE_WITH_DATA: prev, HYBRID_FRAMEWORK: next } = FRONTEND_ROUTES;

const imgList: ShowImgPart[] = [
    {
        src: GET_SERVER_01,
        foreverShow: true,
    },
    {
        src: GET_SERVER_02,
    },
    {
        src: GET_SERVER_03,
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
                    get serve side props
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

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const list = await getPokemons();

    return {
        props: {
            list
        }
    }
}

export default Slide