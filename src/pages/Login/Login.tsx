import React, {useContext, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast"

import Navbar from '../../components/Navbar/Navbar';
import userContext from '../../store/user-context';

import classes from "./login.module.css";

const Login = () => {

    const navigate = useNavigate();
    const user = useContext(userContext);
    const nameRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)

    const loginHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const name = nameRef.current!.value;
        const pass = passRef.current!.value;

        if(name.trim() === ""){
            toast.error("Enter a username")
            return;
        }

        if(pass.trim() === ""){
            toast.error("Enter a password")
            return;
        }
        
        user.setUser(name.trim())
        toast.success("Login Successful")
        navigate("/",{replace: true})
    }

    return (
        <>
            <Navbar/>
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
                                <input ref = {passRef} type = "password" id = "passwd"/>
                            </div>

                            <button type="submit" className = {classes.submit}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login