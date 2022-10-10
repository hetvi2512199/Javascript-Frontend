import React,{useEffect, useState} from "react";

const App5 = () =>{

    const [num, setNum] = useState(0)

    // useEffect(()=>{
    //     alert("i am clicked");
    // },[num]);

    return(
        <button onClick={()=>setNum(num+1)}>useEffect click me{num}</button>
    )
};


export default App5;