import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import { RigthArrow, LeftArrow } from "../icons";

type Props = {
    prev?: string,
    next?: string,
}

enum POSITION {
    LEFT,
    RIGTH
}

const Div = styled.div`
    padding: 10px 0;
    gap: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Separator = styled.div`
    width: 1px;
    height: 20px;
    background-color: ${props => props.theme.backgroundDark};
`;

const Button = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: ${props => props.theme.backgroundLigth};
`

const PptPrevNext: FC<Props> = ({ prev, next }) => {

    const btn = (path: string | undefined, position: POSITION) => (path ? (
        <Link href={path}>
            <Button>
                {position === POSITION.RIGTH ? <RigthArrow /> : <LeftArrow />}
            </Button>
        </Link>
    ) : <></>)

    return (
        <Div>
            {btn(prev, POSITION.LEFT)}
            <Separator />
            {btn(next, POSITION.RIGTH)}
        </Div>
    )
}

export {
    PptPrevNext
}