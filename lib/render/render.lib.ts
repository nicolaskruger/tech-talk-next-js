
type KindRenderType = {
    simple: string,
    complete: string
}

const getKindRende = (): KindRenderType[] => (
    [
        {
            simple: "CSR",
            complete: "Cliente-Side Rendering"
        },
        {
            simple: "SSR",
            complete: "Server-Side Rendering"
        },
        {
            simple: "SSG",
            complete: "Static-Site Generation"
        }
    ]
)

export {
    getKindRende
}

export type {
    KindRenderType
}