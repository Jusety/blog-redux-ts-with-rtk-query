import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface IUserState {
    users: IUser[];
    isLoading: boolean;
    isError: string | null;
}

const initialState: IUserState = {
    users: [],
    isLoading: false,
    isError: null,
};

export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        usersFetching(state = initialState) {
            state.isLoading = true;
        },
        usersFetchingSuccess(
            state = initialState,
            action: PayloadAction<IUser[]>
        ) {
            state.isLoading = false;
            state.isError = null;
            state.users = action.payload;
        },
        usersFetchingError(
            state = initialState,
            action: PayloadAction<string>
        ) {
            state.isLoading = false;
            state.isError = action.payload;
        },
    },
});

const UserReducer = UserSlice.reducer;

export default UserReducer;
