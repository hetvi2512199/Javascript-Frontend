import React,{useState} from "react";


const App4 = () => {
    const [data, setData] = useState(0)
    return(
        <div>
            <h1>useState Hooks</h1>
            <button onClick={() => setData(data+1)}
            >Update data {data}</button>
        </div>
    )
}


export default App4;