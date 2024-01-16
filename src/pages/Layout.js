import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const NAVBAR_CONT = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`

const Layout = () => {
    return(
        <>
            <NAVBAR_CONT>
                <Navbar />
            </NAVBAR_CONT>
            <Outlet />
        </>
    )
}

export default Layout;