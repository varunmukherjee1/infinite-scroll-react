import React, {useContext, useRef} from 'react'
import { useNavigate } from 'react-router-dom';

import userContext from '../../store/user-context';

import classes from "./login.module.css";

const Login = () => {

    const navigate = useNavigate();
    const user = useContext(userContext);
    const nameRef = useRef<HTMLInputElement>(null)

    const loginHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className = {classes.body}>
            <div className = {classes.container}>
                <div className = {classes.content}>
                    <p className = {classes.heading}>Login Here</p>
                    <form onSubmit = {loginHandler}>
                        <div className = {classes.input}>
                            <label htmlFor="username">Username</label>
                            <input ref = {nameRef} type="text" id = "username"/>
                        </div>

                        <div className = {classes.input}>
                            <label htmlFor="passwd">Password</label>
                            <input type = "password" id = "passwd"/>
                        </div>

                        <button type="submit" className = {classes.submit}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login