import React from "react";
import { IPost } from "../models/IPost";
import MyButton from "./UI/button/MyButton";

interface PostItemProps {
    post: IPost;
    update: (post: IPost) => void;
    remove: (post: IPost) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, remove, update }) => {
    const deleteHandler = () => {
        remove(post);
    };

    const updateHandler = () => {
        const title = prompt("Enter new title") || "";
        update({ ...post, title });
    };

    return (
        <div className="post">
            <span onClick={updateHandler}>
                {post.id}. {post.title}{" "}
                <strong>
                    <i>({post.author})</i>
                </strong>
            </span>
            <MyButton onClick={deleteHandler}>Delete</MyButton>
        </div>
    );
};

export default PostItem;
