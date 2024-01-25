import React from 'react';
import styled from 'styled-components';
import DraggableIcon from '../assets/icons/draggableIcon.svg';
import PencilIcon from '../assets/icons/pencilIcon.svg';
import BinIcon from '../assets/icons/trashbinIcon.svg';
import DynamicInput from './DynamicInput';

const CONTAINER = styled.div`
    width: 640px;
    border-radius: 24px;
    background-color: #fff;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px 0px 0px 0px rgba(0, 0, 0, 0.00), 0px -1px 0px 0px #E0E2D9 inset;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const HEADER_INFO = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    padding: 24px;
`

const HEADER_TITLE_CONT = styled.div`
    display: flex;
    gap: 8px;
`

const HEADER_SETTINGS = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

const HeaderContainer = ({ onDelete }) => {
    return (
        <CONTAINER>
            <img src={DraggableIcon} alt="Icon" style={{cursor: 'pointer', marginLeft: '12px'}}/>
            
            <HEADER_INFO>
                <HEADER_TITLE_CONT>
                    <DynamicInput defaultValue="Hello Everyone" />
                    <img src={PencilIcon} alt="Icon" style={{cursor: 'pointer'}} />
                </HEADER_TITLE_CONT>
            
                <HEADER_SETTINGS>
                    <img src={BinIcon} alt="Icon" style={{cursor: 'pointer'}} onClick={onDelete} />
                </HEADER_SETTINGS>
            </HEADER_INFO>
        </CONTAINER>
    )
}

export default HeaderContainer;