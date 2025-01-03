import './App.css';
import { useState } from "react";
import ImageOne from './1.png'
import ImageTwo from './2.png'

function App() {
  const [isZoomed, setIsZoomed] = useState(false);
  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const [isZoomedd, setIsZoomedd] = useState(false);

  const toggleZoom2 = () => {
    setIsZoomedd(!isZoomedd);
  };
 
 
  let SecondImage = ImageTwo
  let firstImage = ImageOne
  const[value, setValue] = useState(' ');

  const deleteLastNumber = () => {
    setValue(value.slice(0,-1))}

const calculateResult = () => {
  try {
    const result = Function(`"use strict"; return (${value})`)();
    setValue(result.toString());
  } catch (error) {
    setValue("error"); 
  }
};


  
  return (
    <div 
    
    style={{display:"flex", justifyContent: "space-between", alignItems:"center", width:"1600px", height:"1200px", flexDirection:"column"}}>
    <div
    
    className="App">
      
    
      <div>
      <div>
      <input style={{ 
        width:"95%", 
        height:"5rem", 
        margin:"2rem 0", 
        borderRadius:"0.5rem",
        padding:"0.1rem",
        fontSize:"2rem",
        
        
                
        }}
        value={value}></input>

      </div>
      <div>
        <button onClick={e => setValue('')} value="Acc" className="buttonn">AC</button>
        <button onClick={deleteLastNumber} value="Del" id="DelBtn" className="buttonn">Del</button>
        <button onClick={e => setValue(value + e.target.value)} value="/" className="buttonn">/</button>

      </div>
      <div>
        <button onClick={e => setValue(value + e.target.value)} value="9" className="buttonn">9</button>
        <button onClick={e => setValue(value + e.target.value)} value="8" className="buttonn">8</button>
        <button onClick={e => setValue(value + e.target.value)} value="7" className="buttonn">7</button>
        <button onClick={e => setValue(value + e.target.value)} value="*" className="buttonn">*</button>
      </div>
      <div>
        <button onClick={e => setValue(value + e.target.value)} value="6" className="buttonn">6</button>
        <button onClick={e => setValue(value + e.target.value)} value="5" className="buttonn">5</button>
        <button onClick={e => setValue(value + e.target.value)} value="4" className="buttonn">4</button>
        <button onClick={e => setValue(value + e.target.value)} value="-" className="buttonn">-</button>
      </div>
      <div>
        <button onClick={e => setValue(value + e.target.value)} value="3" className="buttonn">3</button>
        <button onClick={e => setValue(value + e.target.value)} value="2" className="buttonn">2</button>
        <button onClick={e => setValue(value + e.target.value)} value="1" className="buttonn">1</button>
        <button onClick={e => setValue(value + e.target.value)} value="+" className="buttonn">+</button>
      </div>
        <button onClick={e => setValue(value + e.target.value)} value="0" className="buttonn">0</button>
        <button onClick={calculateResult} value="=" id="EqualBtn" className="buttonn">=</button>
       
      </div>

    </div>

    <footer style={{display:"flex", justifyContent: "space-between", alignItems:"center", flexDirection:"column"}}>

        <div>
          <img className='images' 
          onClick={toggleZoom2}
          style={{
            width:"400px", 
            marginTop:"10px", 
            borderRadius:"10px",
            cursor: "pointer",
            transition: "transform 0.3s ease",
            transform: isZoomedd ? "scale(2)" : "scale(1)",
            }} 
          src={SecondImage}/>
        </div>
        <div>
          <img className='images' 
          onClick={toggleZoom}
          style={{
            width:"400px", 
            marginTop:"10px", 
            borderRadius:"10px",
            cursor: "pointer",
            transition: "transform 0.3s ease",
            transform: isZoomed ? "scale(2)" : "scale(1)",
            }} 
            
            src={firstImage}/>
        </div>
       
    </footer>
    </div>
  );
}

export default App;
