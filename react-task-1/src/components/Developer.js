import React from "react";


function Developer(props){
    return(
        <div>
            <img src={props.logo} className="App-logo" alt="logo" />
            <h2>{props.isOnline?"Online":"Offline"}</h2>
            <h2>{props.name}</h2>
            <h3>{props.role}</h3>
            <ul>
                {props.skills?.map((skill,i)=>(
                    <p key={`${skill}_${i}`}>{skill}</p>
                )
                )}
            </ul>
        </div>
    )
}


export default Developer;