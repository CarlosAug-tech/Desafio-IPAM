import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    districts: [],
    district: {},
};

const districts = createSlice({
    name: 'districts',
    initialState: INITIAL_STATE,
    reducers: {
        listDistricts: (state, action) => {
            state.districts = action.payload;
        },
        addDistrict: (state, action) => {
            state.district = action.payload;
        },
        clearDistricts: (state) => INITIAL_STATE,
    },
});

export default districts.reducer;
export const { addDistrict, listDistricts, clearDistricts } = districts.actions;
