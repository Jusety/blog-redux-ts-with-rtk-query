import React from "react";
import { ITodo } from "../models/ITodo";
import MyButton from "./UI/button/MyButton";

interface TodoItemProps {
    todo: ITodo;
    update: (todo: ITodo) => void;
    remove: (todo: ITodo) => void;
    titleFunc: () => any;
}

const TodoItem: React.FC<TodoItemProps> = ({
    todo,
    update,
    remove,
    titleFunc,
}) => {
    const updateCheckerHandler = () => {
        update({ ...todo, completed: !todo.completed });
    };

    const updateTitleHandler = () => {
        let title = titleFunc() || "";
        if (title !== "") update({ ...todo, title });
    };

    return (
        <div className="post">
            <span onClick={updateTitleHandler}>
                {todo.id}.{todo.title}
            </span>
            <div className="btns">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={updateCheckerHandler}
                />
                <MyButton onClick={() => remove(todo)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default TodoItem;
