import React from "react";
import Landing_Navbar from "../components/Landing_Navbar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import fivestars from "../assets/icons/5_stars.svg"
import leftheadpic from "../assets/img/LeftHeadPhot.svg"
import rightheadpic from "../assets/img/RightHeadPhot.svg"

const LANDING_NAVBAR_CONT = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`

const MAINTEXT = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 12px;
`

const HEADERTEXT = styled.h1`
    display: flex;
    width: 600px;
    height: 200px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;

    margin-top: -12px;

    background: radial-gradient(1199.1% 50.04% at 50% 50%, #FF5858 0%, #C058FF 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 96px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -2.4px;
    text-align: center;
`

const HEADERCONT = styled.div`
    display: flex;
    width: 100%;
    margin-top: 100px;
    align-items: center;
    justify-content: center;
    gap: 60px;

`



const Landing_Page = () => {
    return (
        <div>
            <LANDING_NAVBAR_CONT>
                <Landing_Navbar>
                </Landing_Navbar>
            </LANDING_NAVBAR_CONT>
            <Outlet />

            <HEADERCONT>

                <img src={leftheadpic}/>

                <MAINTEXT>
                    <img src={fivestars}/>
                    <p>Loved by many ❤️</p>

                    <HEADERTEXT>
                        Launch your site in seconds

                    </HEADERTEXT>

                <p>It’s free, and takes less than a minute</p>

                </MAINTEXT>

                <img src={rightheadpic}/>

            </HEADERCONT>

        </div>

    
    )
}

export default Landing_Page;