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
    GET_STATIC_PROPS: "/slide-get-static-props",
    PAGE_PATH_EXTERNAL_DATA: "/slide-page-path-external-data",
    GET_STATIC_PATH: "/slide-get-static-path/bulbasaur",
    GET_STATIC_PATH_POKEMON: (pokemon: string) => `/slide-get-static-path/${pokemon}`,
    SERVER_SIDE_RENDER: "/slide-server-side-render",
    SERVER_SIDE_WITH_DATA: "/slide-server-side-with-data",
    GET_SERVER_SIDE_PROPS: "/slide-get-server-side-props",
    HYBRID_FRAMEWORK: "/slide-hybrid-framework"
};

const serializeRoutes = () => Object.keys(FRONTEND_ROUTES).map(key => FRONTEND_ROUTES[key as "HOME"])
    .filter(word => typeof word === 'string')

export {
    FRONTEND_ROUTES,
    serializeRoutes
}