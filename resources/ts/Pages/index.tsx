import React, { JSX, ReactNode, FC } from "react";
import Layout from "./Layout";

interface MainComponentType extends FC {
    layout?: (page: ReactNode) => JSX.Element;
}

const Main: MainComponentType = () => {
    return (
        <>
            <div>Главная страница</div>
        </>
    );
};

Main.layout = page => <Layout children={page} />
export default Main;