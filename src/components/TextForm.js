import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>
    {
        // console.log(" Upper case was clicked ", text );
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }

    const handleLoClick = ()=>
    {
      
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handleOnChange = (event)=>
    {
        console.log(" On change " );
        // let newText = text.toUpperCase();
        setText(event.target.value);
        
    }

    const [text, setText] =  useState('');


    const handleCopy = () =>
    {
        
        var text = document.getElementById("myBox");
        text.select();
       
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }


    const handleExtraSpaces = () => {

        let newText = text.split(/[ ]+/);

        setText(newText.join(" "))
        props.showAlert("Removed extra spaces ", "success");
    }



  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
   <h1> {props.heading}</h1>    
<div class="mb-3">

<textarea className="form-control my-2" value={text} onChange= {handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
<button className= "btn btn-primary mx-2" onClick= {handleUpClick}>Convert to Uppercase</button>
<button className= "btn btn-primary mx-2" onClick= {handleLoClick}>Convert to Lowercase</button>
<button className= "btn btn-primary mx-2" onClick= {handleCopy}>Copy Text</button>

<button className= "btn btn-primary mx-2" onClick= {handleExtraSpaces}> Remove Extra spaces</button>



</div>
    </div>

<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text Summary</h2>
    <p>
        {text.split(" ").length} and  {text.length} characters
    </p>

    <p>
        {0.008 *text.split(" ").length} Minutes read
    </p>

    <h2> Preview </h2>
    <p> {text.length>0?text:"Enter something in textbox above to preview it here"} </p>
</div>
    </>
  )
}
