import { NextPage } from "next";
import { OnlyImageSlide } from "../components";
import { FRONTEND_ROUTES, IMG } from "../constants";

const { GET_STATIC_PATH: prev, SERVER_SIDE_WITH_DATA: next } = FRONTEND_ROUTES;

const { SERVER_SIDE_RENDER: src } = IMG;

const Slide: NextPage = () => {
    return (
        <OnlyImageSlide prev={prev} next={next} src={src} title="server side rendering" />
    )
}

export default Slide