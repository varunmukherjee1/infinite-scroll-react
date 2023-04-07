import React,{useEffect, useState, useRef} from 'react'
import axios from "axios"

import Navbar from '../../components/Navbar/Navbar';
import User from '../../models/user';
import UserCard from '../../components/UserCard/UserCard';

import classes from "./users.module.css";

const Users = () => {

    const [userData,setUserData] = useState<User[]>([])
    const [page,setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const [halt,setHalt] = useState<boolean>(false)
    const dataFetchRef = useRef(false);

    const updateUserData = (data: User[]) => {
        setUserData((prev) => [...prev,...data])
    }

    const fetchData = async () => {
        try {

            // console.log(`Fetch page = ${page}`);

            if(!halt){
                setLoading(true);
                const res = await axios.get(`https://randomuser.me/api/?page=${page}&results=9&seed=abc`)

                const newData = res.data.results.map((usr:any) => (new User(usr.name.first,usr.name.last,usr.picture.medium)))

                // updateUserData(newData)
                // setLoading(false)

                setTimeout(() => {
                    updateUserData(newData)
                    setLoading(false)
                    dataFetchRef.current = false;
                },1000)

            }
        } catch (error) {
            console.log("Fetch Error");
            console.log(error);
        }
    }

    const scrollHandler = () => {
        let innh: number = 0;
        if(window !== undefined){
            innh = window.innerHeight;
        }

        const scroll: number = document.documentElement.scrollTop;
        const scrollh = document.documentElement.scrollHeight;

        // console.log(`inner height = ${innh}`);
        // console.log(`scroll = ${scroll}`);
        // console.log(`scroll height = ${scrollh}`);

        if((innh + scroll) >= scrollh){
            setPage((prev) =>  prev +1)
        }
    }

    useEffect(() => {
        if(dataFetchRef.current) return;
        dataFetchRef.current = true;
        fetchData();
    },[page])

    useEffect(() => {
        window.addEventListener("scroll",scrollHandler)

        return () => {
            window.removeEventListener("scroll",scrollHandler)
        }
    },[])

    return (
        <>
            <Navbar/>
            <div className = {classes.body}>
                <div className = {classes.container}>
                    {userData.map((val,idx) => (
                        <UserCard key = {idx} userData = {val}/>
                    ))}
                    {loading &&  <p className = {classes.loading}>Loading ...</p>}
                </div>
            </div>
        </>
    )
}

export default Users