import './App.css';

function AppColor(props){
    function greetUser(e){
        document.body.style.background = e.target.value;
        alert('Welcome' + document.getElementById(props.color).value);
    }
    return(
        <body style = {{backgroundColor: 'podwerblue', color : 'black'}}>
            <div className='app'>
                <h1>{props.heading}</h1>
                <p style={{ color: 'blue',font: '30px Arial'}}>

                </p>
                <label class = 'label' id ='lb1'>
                {props.lb1}
                </label>

                <input id={props.color} type='text' />
                <button value={props.color} onClick={greetUser}>
                    Color Me {props.color}
                </button>
            </div>
        </body>
    );
}

export default AppColor;