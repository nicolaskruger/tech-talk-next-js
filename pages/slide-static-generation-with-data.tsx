import { NextPage } from "next";
import { OnlyImageSlide } from "../components";
import { FRONTEND_ROUTES, IMG } from "../constants";

const { STATIC_GENERATION_WITHOUT_DATA: prev, GET_STATIC_PROPS: next } = FRONTEND_ROUTES;
const { STATIC_GENERATION_WITH_DATA: img } = IMG;


const StaticGenerationWithData: NextPage = () => {
    return (
        <OnlyImageSlide next={next} prev={prev} src={img} title={"static generation without data"} />
    );
}

export default StaticGenerationWithData