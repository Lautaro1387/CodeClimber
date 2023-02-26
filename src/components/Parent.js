import React, { useContext } from "react";
import Child from "./Child.js"
import { AuthContext } from "../contexts/AuthContext";

export default function Parent() {
    const auths = useContext(AuthContext)
    return (
        <>
            <h1>{auths.username}</h1>
            <Child/>
        </>
    )
}