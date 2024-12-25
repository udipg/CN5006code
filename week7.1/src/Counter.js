import React from 'react';
import './App.css';

import { useState } from 'react';

function UpdateCounter () {

    const [count, setCount] = useState(0);

    const clickEventHandler = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <form>
                <h1>Click This Counter : {count}</h1>
                    <button type = 'button' onClick={clickEventHandler}>
                        Click Me{count}
                    </button>
                
            </form>
        </div>
    );
}
export default UpdateCounter;