import React,{useState} from "react";


function Test2(){
    const [login,setLogin]  = useState(2)


    return(
        <div>
            {/* {login?<h1>Welcome hetvi</h1>:<h1>sorry hetvi</h1>} */}
            {login==1?<h1>Welcome hetvi 1</h1>:login==2?<h1>Welcome hetvi 2</h1>:<h1>Welcome hetvi 3</h1>}
        </div>
    )

    
}

export default Test2;