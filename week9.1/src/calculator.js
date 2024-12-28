import App from "./App";
import './App.css'
import './Calculator.css'
import React from "react";
import Button from "./Button.js";
import {useState} from "react";
import sujit from "./sujit.jpg"

function KeyPadComponent(props){
    const [text1, setText ] = useState("")
    const [pic, setPic] = useState(null)
    

    const ClickHandle = (e) => {
        if (e.target.value=="C")
        {
       
            setText("")    
        }
        else if  (e.target.value=="=")
        {
        setText(eval(text1))
        alert(eval(text1))             
        }
        else if(e.target.value == "Show Me") {
            setPic(sujit)
        }
        else if(e.target.value === "x²") {
            setText(text1*text1)
            } 
        else
        setText(text1+e.target.value)
      };

   
        return (
            <div className="Calculator">
                <div className="screen-row">
                <input type="text" readOnly value= {text1} />
                </div>
                
               
               <div >
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle}/>
                <Button label="C" ClickHandle={ClickHandle}/> 
                </div>

                <div >
                <Button label="1"  ClickHandle={ClickHandle}/>
                <Button label="2" ClickHandle={ClickHandle}/>
                <Button label="3" ClickHandle={ClickHandle}/>
                <Button label="+" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="4" ClickHandle={ClickHandle}/>
                <Button label="5" ClickHandle={ClickHandle}/>
                <Button label="6" ClickHandle={ClickHandle}/>
                <Button label="-" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="7" ClickHandle={ClickHandle}/>
                <Button label="8" ClickHandle={ClickHandle}/>
                <Button label="9" ClickHandle={ClickHandle}/>
                <Button label="*" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="." ClickHandle={ClickHandle}/>
                <Button label="0" ClickHandle={ClickHandle}/>
                <Button label="=" ClickHandle={ClickHandle}/>
                <Button label="/" ClickHandle={ClickHandle}/>
                </div>


                <div>
                <Button label="x²" ClickHandle={ClickHandle} />
                <Button label="Show Me" ClickHandle={ClickHandle} />
                
                <p>

                    <img src={pic} style={{ width: 600, height: 450 }} alt= '' />
                </p>
            
                </div>
                

                

                
                
            </div>
        );
    
}
export default KeyPadComponent;