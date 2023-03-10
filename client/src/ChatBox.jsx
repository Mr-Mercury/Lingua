import React, {Component} from 'react'; 
import { useState } from 'react';
import {connect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateInput } from './features/messageSlice';
import { sendMessage } from './features/messageSlice';

function bar (props) {
    const {input} = useSelector(state => state.message);
    const {curMode} = useSelector(state => state.message); 
    const dispatch = useDispatch(); 
    const [inputText, setInputText] = useState('');


    // const handleSub = (event) => {
    //     console.log(event.target.value)
    //     state.input = event.target.msg.value;
    //     console.log(state.input);
    // }
    // SOMEHOW PREVENTDEFAULT WORKED WE DONT KNOW WHY BUT IT DOES
    return (
    <div>
        <form>
            <p>{curMode}</p>
            <input type='text' id = 'query' placeholder = 'Type Here!' onChange={(e) => dispatch(updateInput(e.target.value))} />
            <button type='submit' id='sentence' onClick={(e) => {
                e.preventDefault();
                dispatch(sendMessage());
                let stuff = document.getElementById('query');
                stuff.value = ''}}>Submit</button>
        </form>
    </div>
    )
}

export default (bar);