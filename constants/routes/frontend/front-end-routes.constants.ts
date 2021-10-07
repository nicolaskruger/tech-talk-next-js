const FRONTEND_ROUTES = {
    HOME: "/",
    FEATURE: "/feature",
    SLIDE_ABOUT: "/slide-about",
    KIND_RENDER: "/slide-kind-render"
};

const serializeRoutes = () => Object.keys(FRONTEND_ROUTES).map(key => FRONTEND_ROUTES[key as "HOME"])
    .filter(word => typeof word === 'string')

export {
    FRONTEND_ROUTES,
    serializeRoutes
}