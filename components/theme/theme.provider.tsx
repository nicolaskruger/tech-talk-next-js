import styled, { DefaultTheme } from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        backgroundDark: string,
        backgroundLigth: string,
        currentSlide: string
    }
}

const theme: DefaultTheme = {
    backgroundDark: "#211838",
    backgroundLigth: "white",
    currentSlide: "orange"
}

export {
    theme
}