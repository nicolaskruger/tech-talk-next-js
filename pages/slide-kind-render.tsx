import { GetStaticProps, NextPage } from "next"
import styled, { keyframes, css } from "styled-components";
import { Container, Layout, PptPrevNext } from "../components";
import { FRONTEND_ROUTES } from "../constants";
import { getKindRende, KindRenderType } from "../lib";
import Head from "next/head";
import { useState } from "react";
import { EnumDictionary } from "../types/indes";

const { SLIDE_ABOUT, NO_PRE_RENDERING } = FRONTEND_ROUTES;

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


enum SHOWTIME {
    SHOW,
    HIDE,
    SHOWING
}

const {
    SHOW,
    HIDE,
    SHOWING
} = SHOWTIME;

const fromShow: EnumDictionary<SHOWTIME, number> = {
    [SHOW]: 1,
    [HIDE]: 0,
    [SHOWING]: 0
}

const toShow: EnumDictionary<SHOWTIME, number> = {
    [SHOW]: 1,
    [HIDE]: 0,
    [SHOWING]: 1
}

type ShowProps = {
    show: SHOWTIME
}

const Show = (props: ShowProps) => keyframes`
    from{
        opacity: ${fromShow[props.show]}
    }
    to{
        opacity: ${toShow[props.show]}
    }
`;

const Li = styled.li<ShowProps>`
    display: flex;
    min-height: 10px;
    gap: 10px;
    justify-content: space-between;
    transform: 1s;
    animation: ${(props) => Show(props)} 1s forwards;
`;

type SimpleProps = {
    last: boolean
}

const Simple = styled.span<SimpleProps>`
    font-weight: bold;
    color: ${props => props.last ? "orange" : "#3333ac"};
`;

const KindRender: NextPage<Return> = ({ list }) => {

    const [show, setShow] = useState(false);

    const oper = (index: number, len: number, show: boolean): SHOWTIME => {
        if (index !== (len - 1)) {
            return SHOWTIME.SHOW
        }
        if (show) {
            return SHOWTIME.SHOWING
        }
        return SHOWTIME.HIDE
    }

    return (
        <Layout>
            <Head>
                <title>
                    kind render
                </title>
            </Head>
            <Container>
                <Main>
                    <Ul onClick={() => setShow(true)}>
                        {list.map((p, index) => (
                            <Li show={oper(index, list.length, show)} key={index}>
                                <Simple last={index === (list.length - 1)}>
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
            <PptPrevNext prev={SLIDE_ABOUT} next={NO_PRE_RENDERING} />
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