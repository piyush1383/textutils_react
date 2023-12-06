// react function based component - rfc to get the desired snippet 
import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked " + text);
    // when we click on the button then we set the value of setText so the text inside textarea changes
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  }

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");

  }
  const handleclearClick = ()=>{
    let newText = ''
    setText(newText);
    props.showAlert("Cleared Text", "success");

  }

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value)
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
    document.getSelection().removeAllRanges();

    }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces", "success");

  }

  const [text, setText] = useState('Enter text here');

  // default value of text is Enter text here and when we change the text it will store in the setText and then used up

  // text = "new text";  // Wrong way to change the state
  // setText = ("new text");  // Correct way to change the state

  return (
    <>
    {/* {{ In this double bracket we are writing objects in JS first is for writing JS and the inner one is for objects in JS }} */}
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
<div className="mb-3 my-3">{

  /* We have to use Onchange function also as we have to update the text when we write in the text area  */}
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
</div>
<button disabled={text.length ===0} className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
<button disabled={text.length ===0} className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
<button disabled={text.length ===0} className="btn btn-primary mx-2" onClick={handleclearClick}>Clear text</button>
<button disabled={text.length ===0} className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
<button disabled={text.length ===0} className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
      
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
  <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length!==0}).length} minutes read time</p>

  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something to preview"}</p>
</div>

   </>
  )
}
