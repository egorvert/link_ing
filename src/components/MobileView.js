import React from 'react'
import styled from 'styled-components';

const FRAMECONTAINER = styled.div`
    display: flex;
    width: 225px;
    height: 450px;
    align-items: center;
    border-radius: 32px;
    border: 12px solid #000;
    background: #FFF;
    z-index: 99;
`

const MobileView = () => {
  return (
    <FRAMECONTAINER>
        <iframe
        title="live update"
        width="227px"
        height="451px"
        src="https://blog.logrocket.com/react-onclick-event-handlers-guide/"
        style={{border: "0", borderRadius: "20px"}}
        loading="lazy"
        allowfullscreen></iframe>
    </FRAMECONTAINER>
  )
}

export default MobileView;