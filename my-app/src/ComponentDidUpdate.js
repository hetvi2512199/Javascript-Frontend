import React from "react";


export default class App2 extends React.Component{
    constructor(){
        super()
        this.state={
            counter:0
        }
    }
    componentDidUpdate(){
        console.warn("componentDidUpdate method called");
    }

    render(){
        return(
            <div>
                <h1>Component Did Update</h1>
                <button
                onClick={() => this.setState({counter:this.state.counter+1})}
                >Update counter {this.state.counter}</button>
            </div>
        )
    }
}