import React, { Children, ReactNode, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import Header from "./includes/header";

export interface User {
    name: string;
    role_name: string
    email: string;
}

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
