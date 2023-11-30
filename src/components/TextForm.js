import React, { useState } from 'react'

export default function TextForm(props) {

   const [text , setText] = useState("")
    

    const replace=() =>{
        console.log("uppercase was clicked")
        let newtext  =  text.toUpperCase();
        props.showAlert("Converted  to upper case"  , "sucess")      
        setText(newtext)
    }


    const replace2=() =>{
      
      let newtext  =  text.toLowerCase();
      props.showAlert("Converted  to lower case"  , "sucess")
      setText(newtext)

    }


      const onchange=(event)=>{
          setText(event.target.value)
      }     
  
     

    return (
   <>
   <div className='container' style= {{color : props.mode === 'dark'?'white':'black' }} >
    <h1>{props.heading }   </h1>
  <div className="mb-3">
    <label htmlFor="myBox" className="form-label"      >Example textarea</label>
    <textarea className="form-control"   value={text}   onChange={onchange} style={{background : props.mode === 'dark'?'grey':'white', 
           color : props.mode === 'dark'?'white':'black' }}   id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>

 <button className = "btn btn-primary" onClick={replace}  > Convert to upperCase </button>
 <button className = "btn btn-primary  mx-2  "  onClick={replace2}  > Convert to LowerCase </button>
    </div>
<div className='container  my-2 'style= {{color : props.mode === 'dark'?'white':'black' }}> 
    <h1>Your text summary</h1>
     <p>{text.split(" ").length} words  and {text.length} charcters </p> 

    <h2>Preview </h2>
     <p>{text.length>0?text:"Enter something to preview it here"  }  </p>
    </div>



   </>
  )
}
