import { FC } from "react"
import styled from "styled-components"
import { Container, Layout, PptPrevNext } from ".."
import { ImageC } from "../image/image.container";
import Head from "next/head";

type Props = {
    title: string,
    src: string,
    prev: string,
    next: string
}

const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    height: 100vh;
`;

const size = 700;

const OnlyImageSlide: FC<Props> = ({ title, src, prev, next }) => {
    return (
        <Layout>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <Container>
                <Main>
                    <ImageC wwidth={size} wheigth={500} src={src} alt={src} />
                </Main>
            </Container>
            <PptPrevNext prev={prev} next={next} />
        </Layout>
    )
}

export {
    OnlyImageSlide
}