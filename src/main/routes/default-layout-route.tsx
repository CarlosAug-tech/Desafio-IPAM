import React from 'react';
import { Outlet } from 'react-router-dom';

import { DefaultLayout } from '../../presentation/pages/__layouts/Default';

function DefaultLayoutRoute() {
    return (
        <DefaultLayout>
            <Outlet />
        </DefaultLayout>
    );
}

export { DefaultLayoutRoute };
