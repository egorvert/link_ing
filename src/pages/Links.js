import React from "react";
import Button from "../components/Button";
import Infobar from "../components/Infobar";
import MobileView from "../components/MobileView";
import styled from "styled-components";
import AddHeaderButton from "../components/AddHeaderButton";
import ChainLinkIcon from "../assets/icons/chainLinkIcon.svg";
import LinkContainer from "../components/LinkContainer";
import HeaderContainer from "../components/HeaderContainer";
import { useState, useEffect } from "react";

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
    gap: 24px;
`

const MOBILE = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const BTNCONT = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const PLACEHOLDER = styled.div`
    width: 100%;
    height: 200px;
    margin-top: 3rem;
    
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #A8AAA2;
`

const Links = () => {
    const [components, setComponents] = useState([]);
    const [showPlaceholder, setShowPlaceholder] = useState(true);

    const addComponent = (type) => {
        const newComponent = {
            type,
            id: Date.now() // unique identifier
        };
        setComponents([...components, newComponent]);
    };

    const deleteComponent = (id) => {
        setComponents(components.filter(component => component.id !== id));
    };

    useEffect(() => {
        setShowPlaceholder(components.length === 0);
    }, [components]);

    const renderComponent = (component) => {
        if (component.type === 'header') {
            return <HeaderContainer key={component.id} onDelete={() => deleteComponent(component.id)} />;
        } else if (component.type === 'link') {
            return <LinkContainer key={component.id} onDelete={() => deleteComponent(component.id)} />;
        }
    };

    return (
        <CONTAINER>
            <EDITOR>
                <Infobar />
                <BTNCONT>
                    <Button btnPress={() => addComponent('link')} />
                    <AddHeaderButton btnPress={() => addComponent('header')} />
                    {components.map(renderComponent)}
                </BTNCONT>
                {showPlaceholder && (
                    <PLACEHOLDER>
                        <img src={ChainLinkIcon} alt="icon" />
                        <p>Show the world who you are.<br /> Add a link to get started.</p>
                    </PLACEHOLDER>
                )}
            </EDITOR>
            <MOBILE>
                <MobileView />
            </MOBILE>
        </CONTAINER>
    );
};

export default Links;