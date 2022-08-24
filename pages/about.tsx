import Head  from "next/head";
import styles from '../styles/About.module.css'


import styled from "styled-components"

const StyledDiv = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: left;
    padding : 3px 10px 3px 10px;
    width: 100px;
    background-color: black;
    color : white;
`;


const Identity = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: left;
    padding : 3px 10px 3px 10px;
    width: 230px;
    color : #000000;
`;

export default function About() {
    return (
        <div>
    <Head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@100&display=swap');
    </style>
    </Head>
    
    <div className={styles.main}>
    <code> type myName = "Chia"|"Jacob"|"sonka";</code>
    <Identity>Undergraduate Student In CS / Math 
    @ Kyoto University</Identity>
    <StyledDiv> Interest </StyledDiv>
        <ul> 
            <li>System (DBMS, OS, Compiler,etc)</li>
            <li>WebDev (Frontend/Backend)</li>
        </ul>
    <StyledDiv> Langs</StyledDiv>
        <ul> 
           <li> ( Java | Type ) script</li>
           <li> Rust </li>
           <li>Golang </li>
           <li>Python </li>
           <li> ( C | C++ ) </li>
        </ul>
    <StyledDiv> FrameWorks</StyledDiv>
        <ul> 
           <li> Next (React) </li>
           <li> Node (Express)</li>
        </ul>
        
    <StyledDiv> Tools </StyledDiv>
        <ul> 
        <li>   Git  </li>
        <li> Docker </li>
        </ul>  
        </div>
        </div>);
}