import { FC } from "react";
import { PptSideBar } from "../ppt-side-bar/ppt-side-bar.component";

const Layout: FC = ({ children }) => {
    return (
        <div>
            <PptSideBar />
            {children}
        </div>
    )
}

export {
    Layout
}