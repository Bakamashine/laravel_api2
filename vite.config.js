import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/ts/app.tsx"],
            refresh: true,
        }),
        react(),
    ],
    // resolve: name => {
    //     const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
    //     return pages[`./Pages/${name}.jsx`]
    //export default defineConfig({

    // resolve: {
    //     alias: {
    //         // 'ziggy-js': path.resolve('vendor/tightenco/ziggy'),
    //         'ziggy-js': path.resolve(__dirname, 'vendor/tightenco/ziggy'),
    //     },
    // },
});
