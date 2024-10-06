import React, { useState } from 'react';
import data from './db';
import "./Style.css"

let App = () => {
    let [state, setState] = useState(data);

    return (
        <div id='container'>
            <h1 id='head'>{state.length} Birthdays Today</h1>
            <div id='pic'>
                {state.map(x => {
                    return (
                        <div key={x.id} id='box'>
                            <img src={x.image} alt="picture" className="birthday-image" />
                            <ruby id='name'>{x.name}<br/><rt>{x.age} years</rt></ruby>
                        </div>
                    );
                })}
            </div>
            <div id='but'>
                <button onClick={Clear} className="clear-button">Clear All</button>
            </div>
        </div>
    );

    function Clear() {
        setState([]);
    }
}

export default App;
