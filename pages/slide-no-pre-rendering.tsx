import { NextPage } from "next";
import { OnlyImageSlide } from "../components";
import { FRONTEND_ROUTES, IMG } from "../constants";

const { KIND_RENDER, PRE_RENDERING } = FRONTEND_ROUTES;
const { NO_PRE_RENDERING } = IMG;

const SlideKindNoPreRendering: NextPage = () => {
    return (
        <OnlyImageSlide next={PRE_RENDERING} prev={KIND_RENDER} src={NO_PRE_RENDERING} title={"no pre render"} />
    );
}

export default
    SlideKindNoPreRendering