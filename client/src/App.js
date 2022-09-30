import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [source,setSource]=useState(null)
  const handleChange=(event)=>{
    if (event.target.files && event.target.files[0]) {
      setSource(URL.createObjectURL(event.target.files[0]));
    }
  }
  return (
    <div className="main">
       <div className="container">
       <form>
         <div className="imageDisplay">
           <img src={source} />
         </div>
         <input type="file"
                 accept=".png, .jpg, .jpeg"
                 name="photo" 
                 onChange={handleChange}
               />
          <input type="text" 
                 placeholder="Enter Your Name"
                 />
          <input type="text" 
                 placeholder="Enter Your Ages"
                 />            

       </form>
       </div>  
    </div>
  );
}

export default App;
