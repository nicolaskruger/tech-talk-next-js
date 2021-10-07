import { GetStaticProps, NextPage } from "next"
import styled, { keyframes, css } from "styled-components";
import { Container, Layout, PptPrevNext } from "../components";
import { FRONTEND_ROUTES } from "../constants";
import { getKindRende, KindRenderType } from "../lib";
import Head from "next/head";
import { useState } from "react";

const { SLIDE_ABOUT } = FRONTEND_ROUTES;

type Return = {
    list: KindRenderType[]
}

const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 25px;
    cursor: pointer;
`;

type LiProps = {
    show: boolean
}



const Li = styled.li<LiProps>`
    display: flex;
    min-height: 10px;
    gap: 10px;
    justify-content: space-between;
    transform: 1s;
    opacity: ${(props) => props.show ? 1 : 0};
`;


const Simple = styled.span`
    font-weight: bold;
    color: #3333ac;
`;

const KindRender: NextPage<Return> = ({ list }) => {

    const [show, setShow] = useState(false);

    return (
        <Layout>
            <Head>
                <title>
                    kind render
                </title>
            </Head>
            <Container>
                <Main>
                    <Ul>
                        {list.map((p, index) => (
                            <Li show={index !== (list.length - 1) || show} key={index}>
                                <Simple>
                                    {p.simple}
                                </Simple>
                                <span>
                                    {p.complete} ☑️
                                </span>
                            </Li>
                        ))}
                    </Ul>
                </Main>
            </Container>
            <PptPrevNext prev={SLIDE_ABOUT} />
        </Layout>
    )
}


export const getStaticProps: GetStaticProps<Return> = () => {
    const list = getKindRende();

    return (
        {
            props: {
                list
            }
        }
    );
}

export default KindRender;