import demoImage from './demo.jpg';
import './App.css';
import Developer from './components/Developer';
import React, { useState } from "react";

function App() {

  const [isOnline , setIsOnline] = useState(true)

  const skills = ["Django","React","Angular"]

  const date = "13 Aug 2022"
  const currentDate = new Date(date);

  const joinedDate = new Date(currentDate.getFullYear(),currentDate.getMonth()-1)

  return (
    <div className="App">

        <Developer logo={demoImage} isOnline={isOnline} name="Hetvi Vyas" role="Python developer"  skills={skills} joinedhours={joinedDate}/>

    </div>
  );
}

export default App;
