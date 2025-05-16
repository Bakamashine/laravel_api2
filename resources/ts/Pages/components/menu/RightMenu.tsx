import React from "react";
import { Link, router } from "@inertiajs/react";
import { route } from "ziggy-js";

function RightMenu() {
    return (
        <>
            <aside className="sidebar" aria-label="Sidebar navigation">
                {/* Домашняя страница */}
                <Link href={route("main")} data-tooltip="Главная">
                    <svg
                        role="img"
                        aria-label="Home"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                </Link>

                {/* Категори */}
                <Link href={route("category.index")} data-tooltip="Категории">
                    <svg
                        role="img"
                        aria-label="Search"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM10 14a4 4 0 110-8 4 4 0 010 8z" />
                    </svg>
                </Link>

                {/* Товары */}

                <Link href="#" data-tooltip="Товары">
                    <svg
                        role="img"
                        aria-label="Notifications"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                    </svg>
                </Link>

                {/* <svg
                    role="img"
                    aria-label="Messages"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M20 2H4a2 2 0 00-2 2v16l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z" />
                </svg>
                <svg
                    role="img"
                    aria-label="Settings"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M19.14 12.94a7.007 7.007 0 000-1.88l2.03-1.58a.5.5 0 00.12-.63l-1.92-3.32a.5.5 0 00-.6-.22l-2.39.96a7.07 7.07 0 00-1.62-.94l-.36-2.54a.5.5 0 00-.5-.42h-3.84a.5.5 0 00-.5.42l-.36 2.54a7.07 7.07 0 00-1.62.94l-2.39-.96a.5.5 0 00-.6.22l-1.92 3.32a.5.5 0 00.12.63l2.03 1.58a7.007 7.007 0 000 1.88l-2.03 1.58a.5.5 0 00-.12.63l1.92 3.32a.5.5 0 00.6.22l2.39-.96c.5.38 1.04.68 1.62.94l.36 2.54a.5.5 0 00.5.42h3.84a.5.5 0 00.5-.42l.36-2.54a7.07 7.07 0 001.62-.94l2.39.96a.5.5 0 00.6-.22l1.92-3.32a.5.5 0 00-.12-.63l-2.03-1.58zM12 15.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
                </svg> */}
            </aside>
        </>
    );
}

export default RightMenu;
