const FRONTEND_ROUTES = {
    HOME: "/",
    FEATURE: "/feature",
    SLIDE_ABOUT: "/slide-about",
    KIND_RENDER: "/slide-kind-render",
    NO_PRE_RENDERING: "/slide-no-pre-rendering",
    PRE_RENDERING: "/slide-pre-rendering",
    STATIC_GENERATION: "/slide-static-generation",
    STATIC_GENERATION_WITHOUT_DATA: "/slide-static-generation-without-data",
    STATIC_GENERATION_WITH_DATA: "/slide-static-generation-with-data",
    GET_STATIC_PROPS: "/slide-get-static-props"
};

const serializeRoutes = () => Object.keys(FRONTEND_ROUTES).map(key => FRONTEND_ROUTES[key as "HOME"])
    .filter(word => typeof word === 'string')

export {
    FRONTEND_ROUTES,
    serializeRoutes
}