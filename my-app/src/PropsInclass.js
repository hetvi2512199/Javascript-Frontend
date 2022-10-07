import React from "react";

class TestOne extends React.Component{

    render(){

        return(

            <div>
                <h1>{this.props.var.name}</h1>
                <h1>{this.props.data}</h1>
            </div>
        )

    }
}

export default TestOne;