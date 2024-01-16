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
        src="https://onelink-nu.vercel.app/1?data=eyJuIjoiSm9obiBTbm93IiwiZCI6IknigJltIEpvaG4gU25vdywgdGhlIGtpbmcgaW4gdGhlIG5vcnRoLiBJIGtub3cgTm90aGluZy4iLCJpIjoiaHR0cHM6Ly9pLmluc2lkZXIuY29tLzU2NzQzZmFkNzJmMmMxMmEwMDhiNmNjMCIsImYiOiJodHRwczovL3d3dy5mYWNlYm9vay5jb20vam9obl9zbm93IiwidCI6Imh0dHBzOi8vdHdpdHRlci5jb20vam9obl9zbm93IiwiaWciOiJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2pvaG5fc25vdyIsImUiOiJtYWlsQGpvaG5fc25vdy5jYyIsImdoIjoiaHR0cHM6Ly9naXRodWIuY29tL2pvaG5fc25vdyIsInRnIjoiaHR0cHM6Ly90Lm1lL2pvaG5fc25vdyIsInciOiIrOTE4ODg4ODg4ODg4IiwieSI6Imh0dHBzOi8veW91dHViZS5jb20vQGpvaG5fc25vdyIsImwiOiJodHRwczovL2xpbmtlZGluLmNvbS9qb2huX3Nub3ciLCJscyI6W3sibCI6Ik15IFdlYnNpdGUiLCJpIjoicGg6Z2xvYmUtZHVvdG9uZSIsInUiOiJodHRwczovL2V4YW1wbGUuY29tIn0seyJsIjoiQW1hem9uIHdpc2hsaXN0IiwiaSI6ImFudC1kZXNpZ246YW1hem9uLW91dGxpbmVkIiwidSI6Imh0dHBzOi8vYW1hem9uLmluIn0seyJsIjoiUmVhY3QgSlMgY291cnNlIiwiaSI6Imdyb21tZXQtaWNvbnM6cmVhY3RqcyIsInUiOiJodHRwczovL3JlYWN0anMub3JnLyJ9LHsibCI6IkRvbmF0ZSBmb3Igb3VyIGNhdXNlIiwiaSI6Imljb25vaXI6ZG9uYXRlIiwidSI6Imh0dHBzOi8vd2hvLmludCJ9LHsibCI6IkRvd25sb2FkIG15IHJlc3VtZSIsImkiOiJwaDpmaWxlLXBkZiIsInUiOiJodHRwczovL2dvb2dsZS5jb20ifV19"
        style={{border: "0", borderRadius: "20px"}}
        loading="lazy"
        allowfullscreen></iframe>
    </FRAMECONTAINER>
  )
}

export default MobileView;