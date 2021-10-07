import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/dist/client/router";

type Props = {
    word: string,
}

type ButtonProps = {
    current: boolean
}

const Button = styled.button<ButtonProps>`
    width: 100%;
    height: 150px;
    background-color: ${props => props.theme.backgroundLigth};
    border: ${props => props.current ? `solid 2px ${props.theme.currentSlide}` : "none"};
    cursor: pointer;
`

const Slide: FC<Props> = ({ word }) => {

    const { pathname } = useRouter();

    return (
        <Link href={word}>
            <Button current={word === pathname}>
                {word}
            </Button>
        </Link>
    )
}

export {
    Slide
}