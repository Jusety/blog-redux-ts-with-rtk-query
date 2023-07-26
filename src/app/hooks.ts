import { useRef, useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useObserver = (
    isLoading: boolean,
    ref: any,
    canload: boolean,
    callback: any
) => {
    const observer = useRef<IntersectionObserver>();

    useEffect((): any => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        var cb = function (entries: any) {
            if (entries[0].isIntersecting && canload) {
                callback();
            }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current);
    }, [isLoading]);
};

export const usePagination = (totalPages: number) => {
    const pagesArray: number[] = [];

    for (let i = 0; i < totalPages; i++) {
        pagesArray.push(i + 1);
    }
    return pagesArray;
};