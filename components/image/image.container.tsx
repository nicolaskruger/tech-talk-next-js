import { ImageProps } from "next/image";
import Image from "next/image";
import { FC } from "react";
import styled, { DefaultTheme, StyledComponent } from "styled-components";

interface ImageNewProps extends ImageProps {
    wwidth: number,
    wheigth: number
};

type WarperProps = {
    width: number,
    heigth: number
}

const Warper = styled.div<WarperProps>`
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.heigth + "px"};
    z-index: -1;
    position: relative;
`;

const ImageC: FC<ImageNewProps> = (props) => {
    return (
        <Warper width={props.wwidth} heigth={props.wwidth} >
            <Image layout='fill' objectFit="contain" {...props} />
        </Warper>
    )
}

export {
    ImageC
}