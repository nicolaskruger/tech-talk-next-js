const FRONTEND_ROUTES = {
    HOME: "/",
    FEATURE: "/feature"
};

const serializeRoutes = () => Object.keys(FRONTEND_ROUTES).map(key => FRONTEND_ROUTES[key as "HOME"])
    .filter(word => typeof word === 'string')

export {
    FRONTEND_ROUTES,
    serializeRoutes
}