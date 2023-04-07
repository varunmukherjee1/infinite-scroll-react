import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import toast from "react-hot-toast"
import { useNavigate, useLocation } from 'react-router-dom';

import userContext from '../../store/user-context';

import classes from "./navbar.module.css"

const Navbar = () => {

    const user = useContext(userContext);
    const navigate = useNavigate()
    const location = useLocation();

    console.log(location.pathname);

    const logoutHandler = () => {
        user.logout();
        toast.success("Logged out successfully")
        navigate("/",{replace: true})
    }

    return (
        <div className = {classes.container}>
            <div className = {classes.nav}>
                <Link to = "/" className = {classes.logo}>
                    <p>Users</p>
                </Link>

                {(user.username === "none" && location.pathname !== "/login") && <Link to = "/login" className = {classes.login}>
                    <p>Login</p>
                </Link>}

                {(user.username !== "none") && <button className = {classes.logout} onClick = {logoutHandler}>
                    Logout
                </button>}
            </div>
        </div>
    )
}

export default Navbar