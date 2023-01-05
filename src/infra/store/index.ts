import { configureStore } from '@reduxjs/toolkit';

import statesReducer from './modules/States';
import citiesReducer from './modules/Cities';
import districtsReducer from './modules/Districts';
import toastReducer from './modules/Toast';

const store = configureStore({
    reducer: {
        state: statesReducer,
        city: citiesReducer,
        district: districtsReducer,
        toast: toastReducer,
    },
});

export default store;
