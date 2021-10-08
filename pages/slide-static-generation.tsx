import { NextPage } from "next";
import { OnlyImageSlide } from "../components";
import { FRONTEND_ROUTES, IMG } from "../constants";

const { PRE_RENDERING: prev, STATIC_GENERATION_WITHOUT_DATA: next } = FRONTEND_ROUTES;

const { STATIC_GENERATION: img } = IMG;

const StaticGeneration: NextPage = () => {
    return (
        <OnlyImageSlide prev={prev} next={next} src={img} title="static generation" />
    );
}

export default StaticGeneration