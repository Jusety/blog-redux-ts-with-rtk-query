import React from "react";
import { useAppDispatch, useAppSelector, usePagination } from "../app/hooks";
import { PhotoSlice } from "../app/reducers/PhotoSlice";
import MyButton from "./UI/button/MyButton";

interface PaginationProps {}

const Pagination: React.FC<PaginationProps> = () => {
    const { totalPages, page } = useAppSelector((state) => state.PhotoReducer);
    const { setPages } = PhotoSlice.actions;
    const dispatch = useAppDispatch();
    const pages = usePagination(totalPages);
    return (
        <div>
            {pages.map((p) => (
                <MyButton
                    className={p === page && "page__current"}
                    key={p}
                    onClick={() => dispatch(setPages(p))}
                >
                    {p}
                </MyButton>
            ))}
        </div>
    );
};

export default Pagination;
