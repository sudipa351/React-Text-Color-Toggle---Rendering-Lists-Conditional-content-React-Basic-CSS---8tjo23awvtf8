import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
const [color,setColor] = useState("red");
// const [setColor1] = useState("blue");



  return (
    <div id="main">
      <p className={color} >Newton School</p>
      <button id='button' onClick={() => setColor('blue')}>Change Style</button>
    </div>
  )
}


export default App;