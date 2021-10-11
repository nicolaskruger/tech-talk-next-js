import { useState } from "react";
import { ShowImgPart } from "../../components";

type Return = [
    ShowImgPart[],
    (index: number) => void
]

const useShowImg = (list: ShowImgPart[]): Return => {
    const [val, setVal] = useState(list)

    const show = (index: number) => {
        setVal(
            val.map((v, i) => ({
                ...v,
                show: (index === i)
            }))
        )
    }

    return [
        val,
        show
    ]
}

export {
    useShowImg
}