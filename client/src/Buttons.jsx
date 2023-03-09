import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import React, {Component} from 'react'; 

import { updateButton } from './features/messageSlice';

function button () {
    const dispatch = useDispatch();
    return (
        <div>
            <button className = 'mode' onClick={ ()=> dispatch(updateButton(3))}> Teacher </button>
            <button className = 'mode' onClick={ ()=> dispatch(updateButton(2))}> Example </button>
            <button className = 'mode' onClick={ ()=> dispatch(updateButton(1))}> Correct </button>
        </div>
    )
}

export default button;