
import { useState } from 'react';
import './App.css';
import About from './components/About'; 
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'; 
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Home from "./components/Home";

function App() {
  const [mode, setMode] = useState('dark'); // wheather dark mode is enabeled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message  , type) =>{
    setAlert({
      message:  message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
  }, 1500);
}
  const toggleMode = (cls) => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success")
      // document.tittle = 'textile -Dark Mode';
      // setInterval(() => {
      //    document.tittle = 'textutils  is amazingMode';
      // },2000);
      // setInterval(() =>{
      //   document.tittle = 'Install textutils is now';
      // },1000);
      }
    
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      // document.tittle = 'textile -Light Mode';
    }

  }
  return (
    <>
    
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}  />
      <Alert  alert={alert}/>
      <div className="container my-3">
            <TextForm showAlert={showAlert} heading="Enter The text to analyze below" mode={mode} />
          
      </div>
      {/*<TextForm showAlert={showAlert} heading="Enter The text to analyze below" mode={mode} />*/}
      {/*<Navbar title ="Textutils" aboutText="About TextUtils"/>  */}
      
   <About />   
      
</>
    
  );
}

export default App;