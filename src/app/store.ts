import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import UserReducer from "./reducers/UserSlice";
import PhotoReducer from "./reducers/PhotoSlice";
import { todoAPI } from "../Service/TodoService";
import { postAPI } from "../Service/PostService";

export const store = configureStore({
    reducer: {
        UserReducer,
        PhotoReducer,
        [todoAPI.reducerPath]: todoAPI.reducer,
        [postAPI.reducerPath]: postAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(todoAPI.middleware)
            .concat(postAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
