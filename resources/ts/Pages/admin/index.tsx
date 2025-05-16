import React from 'react';
import Layout_Admin from './layout_admin';
import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

function Admin () {
    return (
        <Layout_Admin>
            <p className="text-center">Добро пожаловать на административную страницу!</p>
            <Link className="btn btn-dark w-100" href={route("category.index")}>Перейти в управление категориями</Link>
        </Layout_Admin>
    )
}

export default Admin;