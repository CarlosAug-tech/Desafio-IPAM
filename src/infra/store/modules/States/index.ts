import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    states: [],
    onlyState: {},
};

const states = createSlice({
    name: 'states',
    initialState: INITIAL_STATE,
    reducers: {
        listStates: (state, action) => {
            state.states = action.payload;
        },
        addState: (state, action) => {
            state.onlyState = action.payload;
        },
        clearOnlyState: (state) => {
            state.onlyState = INITIAL_STATE.onlyState;
        },
    },
});

export default states.reducer;
export const { listStates, addState, clearOnlyState } = states.actions;
