import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IPost } from "../models/IPost";

interface IParams {
    limit: number;
    page: number;
}

export const postAPI = createApi({
    reducerPath: "postAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    tagTypes: ["Post"],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], IParams>({
            query: ({ limit, page }) => ({
                url: "/posts",
                params: {
                    _limit: limit,
                    _page: page,
                },
            }),

            merge: (currentCache, newItems) => {
                currentCache.push(...newItems);
            },
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },

            // Always merge incoming data to the cache entry

            // Refetch when the page arg changes

            providesTags: ["Post"],
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: "/posts",
                method: "POST",
                body: post,
            }),
            invalidatesTags: ["Post"],
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: "/posts/" + post.id,
                method: "DELETE",
            }),
            invalidatesTags: ["Post"],
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: "/posts/" + post.id,
                method: "PATCH",
                body: post,
            }),
            invalidatesTags: ["Post"],
        }),
    }),
});
