import "./bootstrap";

import { InertiaProgress } from "@inertiajs/progress";
import { createInertiaApp } from "@inertiajs/react";
import React from "react";
import { createRoot } from "react-dom/client";

InertiaProgress.init();

createInertiaApp({
    resolve: (name) => {

        const pages: Record<string, { default: React.ComponentType<any> }> = import.meta.glob("./Pages/**/*.tsx", {
        eager: true,
        });
        return pages[`./Pages/${name}.tsx`];

    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
