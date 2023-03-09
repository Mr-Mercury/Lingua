import React, {Component} from 'react'; 
import { useState } from 'react';
import {connect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateInput } from './features/messageSlice';
import { sendMessage } from './features/messageSlice';

function bar (props) {
    const {input} = useSelector(state => state.message); 
    const dispatch = useDispatch(); 
    const [inputText, setInputText] = useState('');


    // const handleSub = (event) => {
    //     console.log(event.target.value)
    //     state.input = event.target.msg.value;
    //     console.log(state.input);
    // }
    
    return (
    <div>
        <form>
            <p>{inputText}</p>
            <p>{input}</p>
            <input type='text' id = 'query' placeholder = 'Type Here!' onChange={(e) => dispatch(updateInput(e.target.value))} />
            <button type='submit' className='sentence' onClick={() => dispatch(sendMessage(input))}>Submit</button>
        </form>
    </div>
    )
}

export default (bar);