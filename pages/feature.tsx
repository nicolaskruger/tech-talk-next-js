import { FC } from "react"
import { Container, Layout, PptPrevNext } from "../components"
import { FRONTEND_ROUTES, IMG } from "../constants"
import Head from "next/head";
import styled from "styled-components";
import { GetStaticProps, NextPage } from "next";
import { FeatureType, getFeatureList } from "../lib";
import { ImageC } from "../components/image/image.container";

const { HOME, SLIDE_ABOUT } = FRONTEND_ROUTES;

const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 100vh;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Li = styled.li`
    display: flex;
    gap: 10px;
`;

const SpanPath = styled.span`
    color: #e97286;
`;

type Return = {
    list: FeatureType[]
}

const size = 200;

const { NEXT_JS_LOGO } = IMG;

const Feature: NextPage<Return> = ({ list }) => {
    return (
        <Layout>
            <Head>
                <title>
                    feature
                </title>
            </Head>
            <Container>
                <Main>
                    <Ul>
                        {list.map((feature, index) => (
                            <Li key={index}>
                                <span>
                                    ☑️{feature.name}
                                </span>
                                {
                                    feature.path &&
                                    <SpanPath>
                                        {feature.path}
                                    </SpanPath>
                                }
                            </Li>
                        ))}
                    </Ul>
                    <ImageC wwidth={size} wheigth={size} src={NEXT_JS_LOGO} alt={NEXT_JS_LOGO} />
                </Main>
            </Container>
            <PptPrevNext prev={HOME} next={SLIDE_ABOUT} />
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<Return> = async () => {

    const list = getFeatureList();

    return (
        {
            props: {
                list
            }
        }
    );
}

export default Feature;