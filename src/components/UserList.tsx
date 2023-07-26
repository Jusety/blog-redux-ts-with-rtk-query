import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchUsers } from "../app/reducers/ActionCreators";
import { IUser } from "../models/IUser";
import MyButton from "./UI/button/MyButton";
import Loader from "./UI/loader/Loader";
import UserItem from "./UserItem";

interface UserListProps {}

const UserList: React.FC<UserListProps> = () => {
    const { users, isError, isLoading } = useAppSelector(
        (state) => state.UserReducer
    );
    const [state, setState] = useState<IUser[]>([]);
    const dispatch = useAppDispatch();

    const deleteHandler = (user: IUser) =>
        setState(state.filter((u) => u.id !== user.id));

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div>
            <MyButton onClick={() => setState(users)}>Get Users</MyButton>
            <div className="post__list">
                {state.length ? (
                    state.map((user) => (
                        <UserItem
                            remove={deleteHandler}
                            user={user}
                            key={user.id}
                        />
                    ))
                ) : (
                    <h1>No users yet!</h1>
                )}
            </div>
            {isLoading && <Loader />}
            {isError && <h1>Error:{isError}</h1>}
        </div>
    );
};

export default UserList;
