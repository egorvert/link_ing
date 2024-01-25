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

const LINK_CONT = styled.div`
    display: flex;
    flex-direction: column;
`

const LINK_INFO = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    padding: 24px;
`

const LINK_TITLE_CONT = styled.div`
    display: flex;
    gap: 4px;
`

const LINK_BODY_CONT = styled.div`
    display: flex;
    font-size: 14px;
    font-weight: 300;
    gap: 4px;
`

const LINK_SETTINGS = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

const LinkContainer = ({ onDelete }) => {
    return (
        <CONTAINER>
            <img src={DraggableIcon} alt="Icon" style={{cursor: 'pointer', marginLeft: '12px'}}/>
            
            <LINK_INFO>
                <LINK_CONT>
                    <LINK_TITLE_CONT>
                        <DynamicInput placeholder="Title (optional)"/>
                        <img src={PencilIcon} alt="Icon" style={{cursor: 'pointer'}} />
                    </LINK_TITLE_CONT>

                    <LINK_BODY_CONT>
                        <DynamicInput placeholder={"Enter URL"} width={"120px"} fontWeight={"400"} />
                        <img src={PencilIcon} alt="Icon" style={{cursor: 'pointer'}} />
                    </LINK_BODY_CONT>
                </LINK_CONT>
            
                <LINK_SETTINGS>
                    <img src={BinIcon} alt="Icon" style={{cursor: 'pointer'}} onClick={onDelete} />
                </LINK_SETTINGS>
            </LINK_INFO>
        </CONTAINER>
    )
}

export default LinkContainer;