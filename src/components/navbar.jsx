import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link" to="/main">
                    main
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">
                    login
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/users">
                    users
                </Link>
            </li>
        </ul>
    );
};

export default Navbar;
