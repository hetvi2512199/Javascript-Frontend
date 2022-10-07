import React from "react";


function User(props){

    return(

        <div>
            <h3>User Component</h3>
            <button onClick={() => props.data()}>call data func</button>
        </div>
    )

}


export default User;