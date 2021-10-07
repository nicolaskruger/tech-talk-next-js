type FeatureType = {
    name: string,
    path?: string
}

const getFeatureList = (): FeatureType[] => {
    return [
        {
            name: "Routing",
            path: "`next/router`"
        },
        {
            name: "Image Optimization",
            path: "`next/image`"
        },
        {
            name: "Fast Refresh"
        },
        {
            name: "Static Assets",
            path: "`public/`"
        },
        {
            name: "Built-in CSS Support"
        },
        {
            name: "API Routes",
            path: "`page/api/user.js`"
        },
        {
            name: "Internationalized Routing"
        },
        {
            name: "File-System Routing",
            path: "page/index.js"
        },
        {
            name: "TypeScript Support"
        },
        {
            name: "Code Splitting & Bundling"
        }
    ]
}

export {
    getFeatureList
}

export type {
    FeatureType
}