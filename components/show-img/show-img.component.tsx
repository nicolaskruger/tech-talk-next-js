import { FC, useState } from "react"
import styled from "styled-components"
import { useShowImg } from "../../hooks"

type ShowImgPart = {
    src: string,
    foreverShow?: boolean
    show?: boolean
}

type Props = {
    list: ShowImgPart[]
}

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    width: 45%;
`;

const Li = styled.li`
    cursor: pointer;
`;


type ImgProps = {
    show: boolean
}

const Img = styled.img<ImgProps>`
    position: relative;
    z-index: -10;
    width: 100%;
    opacity: ${(props) => props.show ? "1" : "0.8"};
`;

const ShowImg: FC<Props> = ({ list }) => {
    const [val, show] = useShowImg(list)

    return (
        <Ul>
            {val.map((v, i) => (
                <Li key={i} onClick={() => show(i)} >
                    <Img show={(v.foreverShow || v.show) as boolean} src={v.src} alt={v.src} />
                </Li>
            ))}
        </Ul>
    )
}

export {
    ShowImg
}

export type {
    ShowImgPart
}