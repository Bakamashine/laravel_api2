import React from "react";
import Layout from "./Layout";
import CreateCateg from "./components/CreateCateg";

const Admin: React.FC = () => {
    return (
        <Layout>
            <div className="mt-2">
                <h4 className="text-center">Административная страница</h4>
                
                    <CreateCateg />
            </div>
        </Layout>
    );
};

export default Admin;
