// react me jab hum javscript likhenge tab {} brackets me likhenge
// aur inko isme convet karna padega      for --> htmlFor
//                                        class --> className and so on..


// import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


import { 
  BrowserRouter as Router,
  Routes,
  Route,
  } from 'react-router-dom';


import React, { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light');  // whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);  

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses = () => {
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-primary')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();   // saare backgroun color remove kar diya
    console.log(cls)
    document.body.classList.add('bg-'+cls)   // jo class hum denge wo add ho jayega
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';

      // setInterval(() => {
      // document.title = 'TextUtils is Amazing Mode';
      // }, 1500);
      // setInterval(() => {
      // document.title = 'Install TextUtils Now';
      // }, 1000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';
      
    }
  }
  return (
    <>
       {/* <Navbar title="TextUtils" aboutText="About "/> */}
       <Router>

       <Navbar title="TextUtils" aboutText="About " mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
    
       <div className="container my-3">
       <Routes>
          {/* Use exact path instead of only path as react can partial math with some other components whose path is mathcing approx with the desired comp and show the other component in display */}
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>

          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>}>
          </Route>
        {/* <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/> */}
          
        </Routes>      
       </div>
      
       </Router>
  </>
  );
}

export default App;
