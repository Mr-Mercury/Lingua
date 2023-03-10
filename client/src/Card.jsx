import React from 'react';

const Card = () => {
    const info = {word: "Daisy", pos: "Noun", definiation: "a small grassland plant "}
    
    return (
        <div>
            <div className = 'card'>
                <p className = 'word'>Word: {info.word}</p>
                <p className = 'pos'>Part of Speech: {info.pos}</p>
                <p className ='def'>Definition: {info.pos}</p>
                <button className = 'card-button'>EXAMPLE</button>
            </div>
        </div>
    )
}

export default Card;