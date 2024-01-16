import React from 'react';
import styled from 'styled-components';
import BoxHat from '../assets/icons/boxHatIcon.svg';

const ADDHEADER = styled.button`
    border: 1px solid #E0E2D9;
    text-decoration: none;
    cursor: pointer;

    border-radius: 32px;
    padding: 0 12px;
    width: 135px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-weight: 600;
    font-size: 14px;
    color: #212529;
    background-color: #F3F3F1;
`

const AddHeaderButton = ({ btnPress }) => {
    return (
        <ADDHEADER onClick={ btnPress }>
            <img src={BoxHat} alt='icon'/>
            <p>Add header</p>
        </ADDHEADER>
    )
}

export default AddHeaderButton;