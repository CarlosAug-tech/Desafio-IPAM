import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

export interface IToast {
    id: string;
    type: 'success' | 'error';
    title: string;
    description?: string;
}

const INITIAL_STATE = {
    toasts: [] as IToast[],
    toast: {} as Omit<IToast, 'id'>,
};

const toasts = createSlice({
    name: 'toasts',
    initialState: INITIAL_STATE,
    reducers: {
        addToast: (state, action) => {
            const toast = {
                id: v4(),
                ...action.payload,
            };

            state.toasts = [...state.toasts, toast];

            return state;
        },
        removeToast: (state, action) => {
            const index = state.toasts.findIndex(
                (item) => item.id === action.payload,
            );
            state.toasts.splice(index, 1);

            return state;
        },
    },
});

export default toasts.reducer;
export const { addToast, removeToast } = toasts.actions;
