'use client'
import {createContext, useEffect, useState} from "react";
import axios from "axios";

const userContext=createContext({});

const Usercontext = ({children}) => {
    const [user,setUser]=useState({});
    useEffect(()=>{
        axios.get('/api/user').then((res)=>{
            setUser(res.data);
        })
    },[])
    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    )
}
export default Usercontext;
