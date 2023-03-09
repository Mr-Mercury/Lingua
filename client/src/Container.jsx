import React, {Component} from 'react';
import ChatBox from './ChatBox';
import Buttons from './Buttons';
import Result from './Result';

//onSubmit 

function container () {
    return (
        <div className = 'container'>
            <h1 id = 'header'>GRAMMAR CORRECTING 9000 AI SUPER MODEL 10 BILLION</h1>
            <hr/>
            <div className = 'chatbox'>
                <Result />
                <ChatBox />
                <Buttons />
            </div>
        </div>
    )
} 

export default (container);