import { NextPage } from "next";
import { OnlyImageSlide } from "../components";
import { FRONTEND_ROUTES, IMG } from "../constants";

const { STATIC_GENERATION_WITH_DATA: next, STATIC_GENERATION: prev } = FRONTEND_ROUTES;
const { STATTIC_GENERATION_WITHOUT_DATA: img } = IMG;


const StaticGenerationWithoutData: NextPage = () => {
    return (
        <OnlyImageSlide next={next} prev={prev} src={img} title={"static generation without data"} />
    );
}

export default StaticGenerationWithoutData