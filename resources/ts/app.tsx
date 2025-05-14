import { InertiaProgress } from "@inertiajs/progress";
import { createInertiaApp } from "@inertiajs/react";
import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Pages/Layout";

InertiaProgress.init();

createInertiaApp({
    resolve: (name) => {
        const pages: Record<string, { default: React.ComponentType<any> }> =
            import.meta.glob("./Pages/**/*.tsx", {
                eager: true,
            });
        // let page = pages[`./Pages/${name}.tsx`];
        // page.default.layout =
        //     page.default.layout || ((page) => <Layout children={page} />);
        // return page;
        
        return pages[`./Pages/${name}.tsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
