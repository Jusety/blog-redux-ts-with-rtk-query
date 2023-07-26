import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link className="link" to="/about">
                    About us
                </Link>
                <Link className="link" to="/posts">
                    Posts
                </Link>
                <Link to="/todos" className="link">
                    Todos
                </Link>
                <Link to="/users" className="link">
                    Users
                </Link>
                <Link to="/photos" className="link">
                    Photos
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
