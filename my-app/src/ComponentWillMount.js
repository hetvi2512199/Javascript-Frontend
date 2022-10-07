import React from "react";


export default class App1 extends React.Component{
    constructor()
    {
        super()
        this.state={
            show:false
        }
    }
    componentWillUnmount()
    {
        console.warn("component will mount called")
    }
    
    render(){
        return(
            <div>
                <h1>Component Will Mount</h1>
                {this.state.show?<Child />:null}
                <button
                onClick={() => {this.setState({show:!this.state.show})}}
                >
                Toggle child
                </button>
            </div>
        )
    }
}

class Child extends React.Component{

    render(){
        return(
            <div>
                <h2>Child Component</h2>
            </div>
        )
    }
}