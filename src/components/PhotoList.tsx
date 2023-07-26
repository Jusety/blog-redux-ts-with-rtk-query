import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchPhotos } from "../app/reducers/ActionCreators";
import Pagination from "./Pagination";
import PhotoItem from "./PhotoItem";
import Loader from "./UI/loader/Loader";

interface PhotoListProps {}

const PhotoList: React.FC<PhotoListProps> = () => {
    const { photos, isError, isLoading, page } = useAppSelector(
        (state) => state.PhotoReducer
    );
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPhotos(20, page));
    }, [page]);

    return (
        <div>
            {isLoading && <Loader />}
            {isError && <h1>Error:{isError}</h1>}
            <div className="post__list">
                {photos.length ? (
                    photos.map((photo) => (
                        <PhotoItem key={photo.id} photo={photo} />
                    ))
                ) : (
                    <h1>No photos yet!</h1>
                )}
            </div>
            <Pagination />
        </div>
    );
};

export default PhotoList;
