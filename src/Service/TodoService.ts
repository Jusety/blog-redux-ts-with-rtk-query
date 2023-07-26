import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ITodo } from "../models/ITodo";

export const todoAPI = createApi({
    reducerPath: "todoAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    tagTypes: ["Todo"],
    endpoints: (build) => ({
        fetchAllTodos: build.query<ITodo[], string>({
            query: () => ({
                url: "/todos",
            }),
            providesTags: ["Todo"],
        }),
        createTodo: build.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: "/todos/",
                method: "POST",
                body: todo,
            }),
            invalidatesTags: ["Todo"],
        }),
        updateTodo: build.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: "/todos/" + todo.id,
                method: "PATCH",
                body: todo,
            }),
            invalidatesTags: ["Todo"],
        }),
        deleteTodo: build.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: "/todos/" + todo.id,
                method: "DELETE",
            }),
            invalidatesTags: ["Todo"],
        }),
    }),
});
