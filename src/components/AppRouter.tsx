import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Main from "./Main";
import PhotoList from "./PhotoList";
import PostList from "./PostList";
import TodoList from "./TodoList";
import UserList from "./UserList";

interface AppRouterProps {}

const AppRouter: React.FC<AppRouterProps> = () => {
    return (
        <div>
            <Routes>
                <Route path="/posts" element={<PostList />} />
                <Route path="/about" element={<About />} />
                <Route path="/todos" element={<TodoList />} />
                <Route path="/" element={<Main />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/photos" element={<PhotoList />} />
            </Routes>
        </div>
    );
};

export default AppRouter;
