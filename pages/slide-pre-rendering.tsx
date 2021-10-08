import { NextPage } from "next";
import { OnlyImageSlide } from "../components";
import { FRONTEND_ROUTES, IMG } from "../constants";

const { NO_PRE_RENDERING: prev, STATIC_GENERATION: next } = FRONTEND_ROUTES;
const { PRE_RENDERING: img } = IMG;

const SlideKindNoPreRendering: NextPage = () => {
    return (
        <OnlyImageSlide next={next} prev={prev} src={img} title={"no pre render"} />
    );
}

export default
    SlideKindNoPreRendering