import { NextPage } from "next";
import { OnlyImageSlide } from "../components";
import { FRONTEND_ROUTES, IMG } from "../constants";

const { SERVER_SIDE_RENDER: prev, GET_SERVER_SIDE_PROPS: next } = FRONTEND_ROUTES;

const { SERVER_SIDE_RENDER_WITH_DATA: src } = IMG;

const Slide: NextPage = () => {
    return (
        <OnlyImageSlide prev={prev} next={next} src={src} title="server with data" />
    )
}

export default Slide