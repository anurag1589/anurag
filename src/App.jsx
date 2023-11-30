import React, { useState } from "react"
import "./index.css"
import Navbar from "./components/Navbar";
import TextForm  from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";


function App(){

let [mode , setmode ] = useState('light');
const[alert, setAlert]= useState(null);

const showAlert =(message , type)=>{
  
  setAlert({
     msg: message,
     type : type 
  })
}

setTimeout(() =>{
     setAlert(null);  
} ,2000);





const toggle =() =>{
     if(mode === 'light'){
      setmode ('dark')
      document.body.style.backgroundColor ="#042743"
      showAlert("Dark mode has been enabled" , "success")
      document.title ="Dark Mode" 
               

      setInterval(()=>{
           document.title ="TextUtilsis Amazing Mode"
      }, 2000); 

            setInterval(()=>{
               document.title ="Intall TextUtils Now "  
            },1500)
     }
     else{
      setmode ('light')
      document.body.style.backgroundColor ="white"
      showAlert("Light mode has been enabled" , "success")
      document.title ="Light Mode"  
     }
 
}




return(
<>
<Router>

<Navbar title = "TextUtils"  mode={mode}  toggle = {toggle}/>
{/* <Navbar/> */}
<Alert  alert = {alert}  />
<div className="container my-4 ">
  
<Switch>
          <Route exact  path="/about"><About/></Route>
 
 <Route exact path="/"> <TextForm  showAlert = {showAlert}  heading ="Enter the text to analyise"  mode= {mode}/>  </Route>                   
  </Switch>
</div>
</Router>
</> 
);
}

export  default App;