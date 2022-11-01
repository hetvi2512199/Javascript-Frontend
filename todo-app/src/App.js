import { useState } from 'react';
import './App.css';


function App() {

  const [language,setLanguage] = useState('');
  const [framework, setFramework] = useState('');

  function saveChanges(){

    var courses = JSON.parse(localStorage.getItem('courses') || "[]")
    var course = {
      language:language,
      framework:framework
    }
    courses.push(course)
    
    localStorage.setItem('courses',JSON.stringify(courses))

  }


  return (
    <div className="center">
        <br/>
            <h1>ToDoList</h1>
        <br/>
        <input type='text' placeholder="Language" value={language} onChange={(e)=>{setLanguage(e.target.value)}}>
        </input><br/>
        <input type='text' placeholder="Framework" value={framework} onChange={(e)=>{setFramework(e.target.value)}}>
        </input><br/><br/>
        <button className="newBtn"  onClick={saveChanges}>SAVE CHANGES</button>

       
      
    </div>
  );
}

export default App;
