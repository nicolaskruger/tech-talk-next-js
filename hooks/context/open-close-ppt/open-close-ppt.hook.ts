import { createContext, Dispatch, SetStateAction } from "react";

type OpenClosePptType = [boolean, Dispatch<SetStateAction<boolean>>]

const OpenClosePptHook: OpenClosePptType = [false, () => undefined]

const OpenClosePpt = createContext(OpenClosePptHook);

export {
    OpenClosePpt
}