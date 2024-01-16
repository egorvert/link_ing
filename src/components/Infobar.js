import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InfoIcon from "../assets/icons/infoIcon.svg"

const BLUECONTAINER = styled.div`
    display: flex;
    width: 838px;
    height: 72px;
    padding: 12px 16px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    margin-left: 28px;
    margin-top: 1rem;

    border-radius: 24px;
    background: var(--linktr_ee_admin_1920x1080_light-Link-Water, #DFE8F9);
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px -1px 0px 0px #E0E2D9 inset;
`

const LIVEURL = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

const COPYURL = styled.div`
    display: flex;
    width: fit-content;
    height: 48px;
    justify-content: center;
    align-items: center;
    gap: 25px;
`
const COPYURLBUTTON = styled.div`
    cursor: pointer;
    display: flex;
    width: 107.16px;
    height: 48px;
    
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    font-size: 16px;
    font-weight: 600;

    border-radius: 64px;
    border: 1px solid var(--linktr_ee_admin_1920x1080_light-Moon-Mist, #E0E2D9);
    background: var(--linktr_ee_admin_1920x1080_light-Nero, #FFF);
`




const Infobar = () => {
    return (
        <BLUECONTAINER>
            <LIVEURL>
                <img src={InfoIcon}/>
                <p><b>Your Linking is live: </b> <a href='https://apple.com'>link.ing/sussolini</a></p>
            </LIVEURL>
            <COPYURL>
                <p>Share your Linking to your socials</p>
                <COPYURLBUTTON>
                    <p>Copy URL</p>
                </COPYURLBUTTON>

            </COPYURL>
        </BLUECONTAINER>

    )


}

export default Infobar