import { NextPage } from "next";
import { OnlyImageSlide } from "../components";
import { FRONTEND_ROUTES, IMG } from "../constants";

const { GET_STATIC_PROPS: prev, GET_STATIC_PATH: next } = FRONTEND_ROUTES;

const { PAGE_PATH: src } = IMG;

const Slide: NextPage = () => {
    return (
        <OnlyImageSlide prev={prev} next={next} src={src} title="page path external data" />
    )
}

export default Slide