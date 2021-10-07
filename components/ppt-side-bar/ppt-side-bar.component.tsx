import { FC, useContext } from "react";
import styled from "styled-components";
import { OpenClosePpt } from "../../hooks";
import Hamburger from 'hamburger-react'
import { serializeRoutes } from "../../constants";
import { useRouter } from "next/dist/client/router";
import { Slide } from "./section";

type DivProps = {
    open: boolean
}

const Div = styled.div<DivProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    transition: 300ms;
    transform: ${props => props.open ? `translateX(0)` : `translateX(-300px)`};
    background-color: ${props => props.theme.backgroundDark};
    padding-top: 40px;
`

const HamburgerWarper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
`;

const HamburgerStyled = styled(styled(Hamburger) <DivProps>``).attrs<DivProps>((props) => ({
    color: props.open ? props.theme.backgroundLigth : props.theme.backgroundDark,

}))`
    position: fixed;
    top: 0;
    left: 0;
`;

const Ul = styled.ul`
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 10px;
    padding-right: 10px;
    height: calc( 100vh - 55px );
`;

const PptSideBar: FC = () => {

    const [open, setOpen] = useContext(OpenClosePpt);


    return (
        <>
            <Div open={open} >
                <Ul>
                    {serializeRoutes().map(word => (
                        <li key={word}>
                            <Slide word={word} />
                        </li>
                    ))}

                </Ul>
            </Div>
            <HamburgerWarper>
                <HamburgerStyled open={open} color={"white"} toggled={open} toggle={setOpen} />
            </HamburgerWarper>
        </>
    )
}

export {
    PptSideBar
}