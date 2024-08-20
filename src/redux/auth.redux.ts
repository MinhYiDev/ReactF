import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPayload {
    name: null;
    email: null;
    isLoading: boolean;
}

const auth = createSlice({
    name: "authSlice",
    initialState: {
        name: null,
        email: null,
        tokens: null,
        isLoading: false,
        isError: false,
        isSuccess: false,
    },
    reducers: {
        getInfoStart: (state) => {
            state.isLoading = true;
        },
        getInfoSucess: (state, action: PayloadAction<IPayload>) => {
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.isLoading = false;
            state.isSuccess = true;
        },
        getInfoFailue: (state) => {
            state.isError = true;
            state.isLoading = false;
        },
    },
});

export const { getInfoStart, getInfoSucess, getInfoFailue } = auth.actions;

export default auth.reducer;
