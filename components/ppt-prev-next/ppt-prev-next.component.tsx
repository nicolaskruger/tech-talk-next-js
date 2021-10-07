import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

type Props = {
    prev?: string,
    next?: string,
}

enum POSITION {
    LEFT,
    RIGTH
}

const Div = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Separator = styled.div``;

const PptPrevNext: FC<Props> = ({ prev, next }) => {

    const btn = (path: string | undefined, position: POSITION) => (path ? (
        <Link href={path}>
            <button>
                {position === POSITION.RIGTH ? "next" : "prev"}
            </button>
        </Link>
    ) : <></>)

    return (
        <Div>
            {btn(prev, POSITION.LEFT)}
            <div></div>
            {btn(next, POSITION.RIGTH)}
        </Div>
    )
}

export {
    PptPrevNext
}