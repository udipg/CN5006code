import './App.css'
import React from 'react'
import like from './like.png';
import Love from './Love.png';
import Sad from './sad.png';
import happy from './happy.png';

class FacebookEmojiCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {number : 0};
        this.increment = this.increment.bind(this);
        this.pic=null
        if (this.props.type ==="Love")
            this.pic=Love
        else if (this.props.type==="Like")
            this.pic=like
        else if (this.props.type==="happy")
            this.pic=happy
        else if (this.props.type==="sad")
            this.pic=Sad
        }

        increment() {
            this.setState((prevState) => {
                return {number : prevState.number+1}
            })
        }
        render(){
            return(
                <div>
                    <h5> It is {this.state.number}{this.props.type}.</h5>
                    <button onClick= {this.increment}>
                        <img src={this.pic} alt=""/>
                        <b>{this.state.number}</b>
                    </button>
                </div>
            );
        }
}

export default FacebookEmojiCounter;