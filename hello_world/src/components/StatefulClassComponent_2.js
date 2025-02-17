import React, { Component } from "react";


class StatefulClassComponent_2 extends Component {
    constructor() {
        super();
        this.state = {
            numVal: 0,
            ButtonText: "Cool Button Text", 
        };
    }

    // It seems that the "Set state" function is necessary when changing the state 
    // if you do not indicate that the state is updated, the content will not re-render
    render() {
        return (
            <div>
                <h1>Count: {this.state.numVal}</h1>
                <button onClick={() => this.setState({ numVal: this.state.numVal + 1 })}>
                    {this.state.ButtonText}
                </button>
            </div>
        );
    }
}

export default StatefulClassComponent_2;