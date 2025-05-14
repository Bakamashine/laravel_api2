import React, { Children, ReactNode, useEffect } from "react";

import { Link } from "@inertiajs/react";
import Header from "./includes/header";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <main>
                <header>
                    <Header />
                </header>

                <article>{children}</article>
                
                
            </main>
        </>
    )
};

export default Layout;
