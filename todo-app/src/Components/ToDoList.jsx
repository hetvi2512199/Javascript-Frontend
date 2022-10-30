import React, { useState } from "react";


const ToDoList = ()=>{

    const [item,setItem] = useState("");
    const [newitem , setNewItem] = useState([]);
 

    const itemEvent = (e) =>{

        setItem(e.target.value)
    };
   

    const listOfItems = () =>{

        setNewItem((prevValue)=>{
            return [...prevValue,item];
        });
    };

 
    return(
        <div className="center_div">
        <br/>
            <h1>ToDoList</h1>
        <br/>
        <input type='text' placeholder="Add an items" onChange={itemEvent}>
        </input>
        <button className="newBtn"  onClick={listOfItems}>Submit</button>

        <br/>
        <ol>
            
            {newitem.map((val)=>{

                return <li>{val}</li>

            })}
            
        </ol>
        <br/>

        </div>
    )
    
};


export default ToDoList;