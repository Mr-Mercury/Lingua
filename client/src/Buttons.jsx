import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import React, {Component} from 'react'; 

function button () {
    return (
        <div>
            <button className = 'mode'> Teacher </button>
            <button className = 'mode'> Example </button>
            <button className = 'mode'> Correct </button>
        </div>
    )
}

export default button;