import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HamburgerIcon from '../assets/icons/hamburgerIcon.svg';
import ShareIcon from '../assets/icons/shareIcon.svg'

const NAV = styled.nav`
    display: flex;
    width: 95%;
    height: 65px;
    padding: 0px 12px 0px 26px;
    justify-content: flex-start;
    align-items: center;
    gap: 58px;
    flex-shrink: 0;

    border-radius: 9999px;
    border-bottom: 1px solid var(--light-moon-mist, #E0E2D9);
    background: var(--light-nero, #FFF);
`

const LOGO = styled.p`
    font-weight: 600;
    width: 82px;
    height: 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 32px;
    border: 1px solid #EFEFEF;

    background: radial-gradient(412.6% 100% at 0% 50%, #FD585D 0%, #D058D4 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const LINKS = styled.p`
    color: #000000;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 8px;
`

const R_CONTAINER = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-left: auto;
    gap: 12px;
`

const SHARE = styled.a`
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;

    width: 100px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    border-radius: 32px;
    border: 1px solid #EFEFEF;
`

const PFP = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    border-radius: 1000px;

    background: var(--light-Nevada, #60696C);

    font-size: 18px;
    font-weight: 600;
    color: #FFF;
`

const Navbar = () => {
  return (
    <NAV>
        <LOGO>Link.ing</LOGO>
        
        <Link to={"/links"} style={{textDecoration: 'none', color: 'inherit'}}>
            <LINKS>
                <img src={HamburgerIcon} alt='icon' />
                <p>Links</p>
            </LINKS>
        </Link>

        <R_CONTAINER>
            <SHARE>
                <img src={ShareIcon} alt='icon' />
                <p>Share</p>
            </SHARE>
            <PFP>
                <p>E</p>
            </PFP>
        </R_CONTAINER>
    </NAV>
  )
}

export default Navbar;