import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import { PhotoSlice } from "./PhotoSlice";
import { UserSlice } from "./UserSlice";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(UserSlice.actions.usersFetching());
        const response = await axios.get<IUser[]>(
            "https://jsonplaceholder.typicode.com/users"
        );
        dispatch(UserSlice.actions.usersFetchingSuccess(response.data));
    } catch (error: any) {
        dispatch(UserSlice.actions.usersFetchingError(error.message));
    }
};

export const fetchPhotos =
    (limit = 10, page = 1) =>
    async (dispatch: AppDispatch) => {
        try {
            dispatch(PhotoSlice.actions.photosFetching());
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/photos",
                {
                    params: {
                        _limit: limit,
                        _page: page,
                    },
                }
            );
            const totalPages = Math.ceil(
                response.headers["x-total-count"] / limit
            );
            dispatch(PhotoSlice.actions.setTotalPages(totalPages));
            dispatch(PhotoSlice.actions.photoFetchingSuccess(response.data));
        } catch (error: any) {
            dispatch(PhotoSlice.actions.photoFetchingError(error.message));
        }
    };
