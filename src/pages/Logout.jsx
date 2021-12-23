import { useEffect } from "react"
import React from "react";
import { useNavigate } from "react-router-dom";
const Logout = () => {
    const nav = useNavigate();
    useEffect(()=>{
        localStorage.clear();
        nav('/')
    }, [nav])

    return <h1 className={"bg-gray-900 text-white h-8 w-auto"}>Logging out ...</h1>
}

export default Logout;