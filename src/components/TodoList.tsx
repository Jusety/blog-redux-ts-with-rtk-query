import React from "react";
import { ITodo } from "../models/ITodo";
import { todoAPI } from "../Service/TodoService";
import TodoItem from "./TodoItem";
import MyButton from "./UI/button/MyButton";
import Loader from "./UI/loader/Loader";

const TodoList: React.FC = () => {
    const {
        isLoading,
        isError,
        data: todos,
    } = todoAPI.useFetchAllTodosQuery("");
    const [createTodo] = todoAPI.useCreateTodoMutation();
    const [updateTodo] = todoAPI.useUpdateTodoMutation();
    const [deleteTodo] = todoAPI.useDeleteTodoMutation();

    const titleFunc = () => {
        let title = prompt("Enter title");
        if (title === "") {
            alert("You didn't title your task!");
            titleFunc();
        } else {
            return title;
        }
    };

    const createHandler = async () => {
        let title = titleFunc() || "";
        if (title !== "")
            await createTodo({
                title,
                completed: false,
            } as ITodo);
    };

    const updateHandler = (todo: ITodo) => {
        updateTodo(todo);
    };

    const deleteHandler = (todo: ITodo) => {
        deleteTodo(todo);
    };

    return (
        <div>
            <MyButton onClick={createHandler}>Add Todo</MyButton>
            {isLoading && <Loader />}
            {isError && <h1>Error:{isError}</h1>}
            <div className="post__list">
                {todos?.map((todo) => (
                    <TodoItem
                        titleFunc={titleFunc}
                        remove={deleteHandler}
                        update={updateHandler}
                        todo={todo}
                        key={todo.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
