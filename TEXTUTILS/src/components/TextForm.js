
 import React, {useState} from 'react'
 
 export default function TextForm(props) {
   const handleUpClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase(); 
    setText(newText)
    props.showAlert("Text has been converted to uppercase", "success")
   }

   const handleLoClick = ()=>{
    //console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase(); 
    setText(newText)
    props.showAlert("Text has been converted to lowercase", "success")
   }

   const handleClearClick = ()=>{
    //console.log("Clear was clicked" + text);
    let newText = ""; 
    setText(newText)
    props.showAlert("Text cleared", "success")
    }
    

   const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);

   }
   const handlecopy = () => {
       console.log("I am copy");
     var text = document.getElementById("myBox");
     text.select();
     text.setSelectionRange(0, 99999);
     navigator.clipboard.writeText(text.value);
     props.showAlert("copied to clipboard", "success")
   }
   
   const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed extr", "success")
   }


   const [text, setText] = useState(' ');
  //text = "new text"; // wrong way to change the state
  //setText("new text"); //correct way to change the state
   return (
    <>
    <div className="container" style={{Color: props.mode==='dark'?'white':'black'}} >
     <h1>{props.heading}</h1>
   <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'grey':'white', Color: props.mode==='light'?'white':'black'}}  id="myBox" rows="8"></textarea>
    </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to Uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to Lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear Text</button>
  <button className="btn btn-primary mx-2" onClick={handlecopy}>copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
     <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2> your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
      <p>0.008 * {text.split(" ")}.length minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text: "Enter something in the textbox above  to preview it here"}</p>
     </div>
     </>
   )
}
 