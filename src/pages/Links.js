import React from "react";
import Button from "../components/Button";
import Infobar from "../components/Infobar";
import MobileView from "../components/MobileView";
import styled from "styled-components";



const CONTAINER = styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
    align-items: center;
    justify-content: space-between;
`

const EDITOR = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 60%;
    height: 100%;
    border-right: 1px solid #E0E2D9;
`

const MOBILE = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const BTNCONT = styled.div`
    margin-top: 3rem;
`

const Links = () => {
    return (
        <CONTAINER>
            <EDITOR>
                <Infobar />
                <BTNCONT>
                    <Button />
                </BTNCONT>
            </EDITOR>

            <MOBILE>
                <MobileView />
            </MOBILE>
        </CONTAINER>
    )
}

export default Links;