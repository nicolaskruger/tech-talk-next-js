import { GetStaticProps, NextPage } from "next";
import { Container, Layout } from "../components";
import Head from "next/head"
import { Pokemon } from "../types/pokemon/pokemon.type";
import { getPokemons } from "../lib";
import { PokeListComponent } from "../components/pokemon";

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
                <PokeListComponent list={list} />
            </Container>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const list = await getPokemons();

    return {
        props: {
            list
        }
    }
}

export default Slide