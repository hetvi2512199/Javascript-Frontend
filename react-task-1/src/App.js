import demoImage from './demo.jpg';
import './App.css';
import Developer from './components/Developer';
import React, { useState } from "react";

function App() {

  const [isOnline , setIsOnline] = useState(true)

  const skills = ["Django","React","Angular"]

  return (
    <div className="App">

        <Developer logo={demoImage} isOnline={isOnline} name="Hetvi Vyas" role="Python developer"  skills={skills}/>

    </div>
  );
}

export default App;
