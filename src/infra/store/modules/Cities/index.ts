import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    cities: [],
    city: {},
};

const cities = createSlice({
    name: 'cities',
    initialState: INITIAL_STATE,
    reducers: {
        listCities: (state, action) => {
            state.cities = action.payload;
        },
        addCity: (state, action) => {
            state.city = action.payload;
        },
        clearCities: (state) => INITIAL_STATE,
        clearCity: (state) => {
            state.city = INITIAL_STATE.city;
            return state;
        },
    },
});

export default cities.reducer;
export const { listCities, addCity, clearCities, clearCity } = cities.actions;
