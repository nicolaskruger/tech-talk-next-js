import { NextPage } from "next";
import styled from "styled-components";
import { Container, Layout, PptPrevNext } from "../components";
import { ImageC } from "../components/image/image.container";
import { FRONTEND_ROUTES, IMG } from "../constants";
import Link from "next/link";
import About from "./about";
import Head from "next/head";

const { FEATURE, KIND_RENDER } = FRONTEND_ROUTES;
const size = 400;

const Main = styled.main`
    display: flex;
    min-height: 100vh;
    align-items: center;
    justify-content: space-around;
`;

const Button = styled.div`
    width: ${`${size}px`};
    height: ${`${size}px`};
    padding: 0;
    margin: 0;
    cursor: pointer;
    border: solid 1px ${props => props.theme.backgroundDark};
`;

const { ABOUT } = IMG;


const SlideAbout: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>
                    about
                </title>
            </Head>
            <Container>
                <Main>
                    <ImageC wwidth={size} wheigth={size} src={ABOUT} />
                    <Link href="/about">
                        <Button>
                            <About />
                        </Button>
                    </Link>
                </Main>
            </Container>
            <PptPrevNext prev={FEATURE} next={KIND_RENDER} />
        </Layout>
    )
}

export default SlideAbout