import React, { useState, useRef } from "react";
import { IPost } from "../models/IPost";
import { postAPI } from "../Service/PostService";
import PostItem from "./PostItem";
import MyButton from "./UI/button/MyButton";
import Loader from "./UI/loader/Loader";
import { useObserver } from "../app/hooks";

interface PostListProps {}

const PostList: React.FC<PostListProps> = () => {
    const [page, setPage] = useState(1);
    const totalCount = 2;
    const ref = useRef(null);
    const limit = 10;

    const {
        isError,
        isLoading,
        data: posts,
    } = postAPI.useFetchAllPostsQuery({ limit, page });

    useObserver(isLoading, ref, page < totalCount, () => {
        setPage(page + 1);
    });

    const [createPost] = postAPI.useCreatePostMutation();
    const [updatePost] = postAPI.useUpdatePostMutation();
    const [deletePost] = postAPI.useDeletePostMutation();

    const createHandler = async () => {
        let author = prompt("Enter your nickname");
        let title = prompt("Enter title for post");
        if (author === "") author = "Unknown author";
        if (title === "") title = "Untitled";

        await createPost({ title, author } as IPost);
    };

    const updateHandler = (post: IPost) => {
        updatePost(post);
    };

    const deleteHandler = (post: IPost) => {
        deletePost(post);
    };

    return (
        <div>
            <MyButton onClick={createHandler}>Add Post</MyButton>
            {isError && <h1>Error:{isError}</h1>}
            {isLoading && <Loader />}
            <div className="post__list">
                {posts?.map((post: IPost) => {
                    return (
                        <PostItem
                            remove={deleteHandler}
                            update={updateHandler}
                            post={post}
                            key={post.id}
                        />
                    );
                })}
                {posts?.length === 0 && <h1>No posts on this page!</h1>}
            </div>
            {/* <div style={{ display: "flex" }}>
                <MyButton onClick={() => setPage(page - 1)}>
                    Previous page
                </MyButton>
                <h3 style={{ marginLeft: 20, marginTop: 15 }}>page:{page}</h3>
                <MyButton onClick={() => setPage(page + 1)}>Next page</MyButton>
                <MyButton onClick={() => fetchData()}>Fetch</MyButton>
            </div> */}
            <div ref={ref} />
        </div>
    );
};

export default PostList;
