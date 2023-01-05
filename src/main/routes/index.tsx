import React from 'react';
import { Routes as DOMRoutes, Route } from 'react-router-dom';

import { HomeFactory } from '../factories/Pages/HomeFactory';
import { ListDistrictsFactory } from '../factories/Pages/ListDistrictsFactory';
import { DefaultLayoutRoute } from './default-layout-route';

function Routes() {
    return (
        <DOMRoutes>
            <Route path="/" element={<DefaultLayoutRoute />}>
                <Route index element={<HomeFactory />} />
                <Route
                    path="listDistricts"
                    element={<ListDistrictsFactory />}
                />
            </Route>
        </DOMRoutes>
    );
}

export { Routes };
