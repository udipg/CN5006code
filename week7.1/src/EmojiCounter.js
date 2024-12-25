import React, { useState, useEffect} from 'react';

import './App.css';
import Love from './Love.png';
import Sad from './sad.png';
import Like from './like.png';
import Happy from './happy.png';

    function EmojiCounter(props) {
        const [pic, setPic] = useState(Love);
        const [count,setCount] = useState(0);
    
    
    useEffect(() =>
        {
        console.log('useEffect Function Called');

        if ( props.pic === "Love"){
                setPic(Love);
            }
        else if ( props.pic ==="like"){
                setPic(Like);
            }
        else if ( props.pic ==="sad"){
                setPic(Sad);
            }
            else if ( props.pic ==="happy"){
                setPic(Happy);
            }

        },[props.pic]);
    

        const clickHandler = () => {
            setCount(count + 1);
        };

        return (
            <div> 
            
                <p>
                    {props.pic}<span></span>
                    <img src={pic} alt= '' />
                    <button onClick = { clickHandler}>Click Me : {count}</button>
                </p>
            </div>
        );
        
    }
   
    export default EmojiCounter

