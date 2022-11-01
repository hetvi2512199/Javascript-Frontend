import './App.css';
import { useEffect, useState } from 'react';

function App() {

    const [data,setData] = useState([])

    useEffect(()=>{
      fetch("https://dummyjson.com/products")
      .then((result)=>{result.json()
      .then((resp)=>{
        const sortResult = resp.products.sort((a,b) => (a.price - b.price))
        setData(sortResult)
      })
    })
    },[])

  return (
    <div className="App">
      <h2> GET API</h2>
      <table border="1">
        <tr>
          <td>ID</td>
          <td>Thumbnail</td>
          <td>Title</td>
          <td>Description</td>
          <td>Price</td>
          <td>Rating</td>

        </tr>
        
        {
          data ? data.map((item)=>
            
            <tr>
              <td>{item.id}</td>
              <img src="{item[0].thumbnail}" alt="image"></img>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.rating}</td>

            </tr>
          
          ):"no data"
        }
      </table>
    </div>
  );
}

export default App;
