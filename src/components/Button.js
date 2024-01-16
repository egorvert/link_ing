import React from 'react';
import styled from 'styled-components';
import PlusIcon from '../assets/icons/plusIcon.svg';

const ADDLINK = styled.button`
    border: none;
    text-decoration: none;
    cursor: pointer;

    width: 640px;
    height: 48px;
    border-radius: 64px;
    padding: 12px 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-weight: 600;
    font-size: 16px;
    color: #FFF;
    background-color: var(--purple-heart, #8129D9);
`

const Button = ({ btnPress }) => {
    return (
        <ADDLINK onClick={ btnPress }>
            <img src={PlusIcon} alt='icon'/>
            <p>Add link</p>
        </ADDLINK>
    )
}

export default Button;