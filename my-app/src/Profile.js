import React from "react";

class Profile extends React.Component{
    constructor()
    {
    super()
    console.warn("constructor");
    }
    componentDidMount()
    {
        console.log("componentDidMount")
    }
    render(){
        console.warn("render");

        return(

            <div>
                <h1>Hello Hetvi</h1>
            </div>
        )
    }
}

export default Profile;