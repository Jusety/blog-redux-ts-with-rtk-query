import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPhoto } from "../../models/IPhoto";

interface IPhotoState {
    photos: IPhoto[];
    isError: null | string;
    isLoading: boolean;
    page: number;
    totalPages: number;
}

const initialState: IPhotoState = {
    photos: [],
    isLoading: false,
    isError: null,
    page: 1,
    totalPages: 1,
};

export const PhotoSlice = createSlice({
    name: "photo",
    initialState,
    reducers: {
        photosFetching(state = initialState) {
            state.isLoading = true;
        },
        photoFetchingSuccess(
            state = initialState,
            action: PayloadAction<IPhoto[]>
        ) {
            state.isLoading = false;
            state.photos = action.payload;
            state.isError = null;
        },
        photoFetchingError(
            state = initialState,
            action: PayloadAction<string>
        ) {
            state.isLoading = false;
            state.isError = action.payload;
        },
        setPages(state = initialState, action: PayloadAction<number>) {
            state.page = action.payload;
        },
        setTotalPages(state = initialState, action: PayloadAction<number>) {
            state.totalPages = action.payload;
        },
    },
});

const PhotoReducer = PhotoSlice.reducer;

export default PhotoReducer;
