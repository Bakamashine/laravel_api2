import React, { ReactNode } from "react";
import Layout from "../Layout";
import CreateCateg from "./components/CreateCateg";

const Layout_Admin = ({ children }: { children: ReactNode }) => {
    return (
        <Layout>
            <div className="mt-2">
                <h4 className="text-center">Административная страница</h4>
                
                <main>
                    {children}
                </main>
            </div>
        </Layout>
    );
};

export default Layout_Admin;