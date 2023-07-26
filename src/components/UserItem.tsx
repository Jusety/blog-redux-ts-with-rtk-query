import React from "react";
import { IUser } from "../models/IUser";
import MyButton from "./UI/button/MyButton";

interface UserItemProps {
    user: IUser;
    remove: (user: IUser) => void;
}

const UserItem: React.FC<UserItemProps> = ({ user, remove }) => {
    return (
        <div className="post">
            {user.id}. {user.name}||{user.username}
            <MyButton onClick={() => remove(user)}>Delete</MyButton>
        </div>
    );
};

export default UserItem;
