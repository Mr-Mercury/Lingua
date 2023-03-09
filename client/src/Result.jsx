import React, {Component} from 'react'; 
import { useSelector } from 'react-redux';

function result() {
    const {curMsg} = useSelector(state => state.message)

    return (
        <div id = 'result'>
            <p>{curMsg}</p>
        </div>
    )
}

export default result;