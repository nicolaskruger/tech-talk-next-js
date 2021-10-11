import { NextPage } from "next";
import { OnlyImageSlide } from "../components";
import { FRONTEND_ROUTES, IMG } from "../constants";

const { GET_SERVER_SIDE_PROPS: prev, } = FRONTEND_ROUTES;

const { HYBRID_FRAMEWORK: src } = IMG;

const Slide: NextPage = () => {
    return (
        <OnlyImageSlide prev={prev} next="" src={src} title="server with data" />
    )
}

export default Slide