import './App.css';
import User from './PassFuncAsProps';



function App() {

  function getData(){

    alert("Data from props")
  }
  return (
    <div className="App">
          <User data={getData}/>
          
    </div>

    
  );
}

export default App;
