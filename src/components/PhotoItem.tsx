import React from "react";
import { IPhoto } from "../models/IPhoto";

interface PhotoItemProps {
    photo: IPhoto;
}

const PhotoItem: React.FC<PhotoItemProps> = ({ photo }) => {
    return (
        <div className="post">
            {photo.albumId}|{photo.id}||{photo.title}
        </div>
    );
};

export default PhotoItem;
