import App from "./App";
import './App.css'
import './Calculator.css'
import React, {useState} from "react";
import sujit from "./sujit.jpg"

function CalculatorApp(){
    const [text1, setText ] = useState("");
    
    const [pic, setPic] = useState(null);
    

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
            <button class="ButtonStyle" value="("  onClick={ClickHandle} >(  </button>
            <button class="ButtonStyle" value="CE"  onClick={ClickHandle} >CE  </button>
            <button class="ButtonStyle" value=")"  onClick={ClickHandle} >)  </button>
            <button class="ButtonStyle" value="C"  onClick={ClickHandle} >C  </button>
            </div>

            <div >
            <button class="ButtonStyle" value="1"  onClick={ClickHandle} >1  </button>
            <button class="ButtonStyle" value="2"  onClick={ClickHandle} >2  </button>
            <button class="ButtonStyle" value="3"  onClick={ClickHandle} >3  </button>
            <button class="ButtonStyle" value="+"  onClick={ClickHandle} >+  </button>
            </div>
            <div >
            <button class="ButtonStyle" value="4"  onClick={ClickHandle} >4  </button>
            <button class="ButtonStyle" value="5"  onClick={ClickHandle} >5  </button>
            <button class="ButtonStyle" value="6"  onClick={ClickHandle} >6  </button>
            <button class="ButtonStyle" value="-"  onClick={ClickHandle} >- </button>
            </div>
            <div >
            <button class="ButtonStyle" value="7"  onClick={ClickHandle} >7  </button>
            <button class="ButtonStyle" value="8"  onClick={ClickHandle} >8  </button>
            <button class="ButtonStyle" value="9"  onClick={ClickHandle} >9  </button>
            <button class="ButtonStyle" value="*"  onClick={ClickHandle} >* </button>
            </div>
            <div >
            <button class="ButtonStyle" value="."  onClick={ClickHandle} >.  </button>
            <button class="ButtonStyle" value="0"  onClick={ClickHandle} >0  </button>
            <button class="ButtonStyle" value="="  onClick={ClickHandle} >=  </button>
            <button class="ButtonStyle" value="/"  onClick={ClickHandle} >/  </button>
            </div>


            <div>
            <button class="ButtonStyle" value="x²"  onClick={ClickHandle} >x² </button>
            <button class="ButtonStyle" value="Show Me"  onClick={ClickHandle} >Show Me </button>
            
            <p>

                <img src={pic} style={{ width: 600, height: 450 }} alt= '' />
            </p>
        
            </div>
         </div>
    );
            
        
}
    
    

export default CalculatorApp;