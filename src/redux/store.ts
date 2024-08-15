import { configureStore } from "@reduxjs/toolkit";
import authRedux from "./auth.redux";

export const store = configureStore({
    reducer: {
        auth: authRedux,
    },
});

export type RootState = ReturnType<typeof store.getState>;
