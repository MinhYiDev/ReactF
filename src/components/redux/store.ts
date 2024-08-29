import {
    combineReducers,
    configureStore,
    EnhancedStore,
} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import authRedux from "./auth.redux";

const persistConfig = {
    key: "auth",
    storage,
    blacklist: ["_persist"],
};

const rootReducer = combineReducers({
    auth: authRedux,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: EnhancedStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export { store };
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
