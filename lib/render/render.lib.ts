
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
        },
        {
            simple: "ISR",
            complete: "Incremental Static Regenation"
        }
    ]
)

export {
    getKindRende
}

export type {
    KindRenderType
}