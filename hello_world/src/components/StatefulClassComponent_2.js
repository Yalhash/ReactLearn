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
    
    increment() {
        // setState is async, so the second param is a callback function executed on completion
        /*this.setState({ numVal: this.state.numVal + 1 },
            () => {
                console.log("Callback value: ", this.state.numVal);
            }
        );
        */
       // Since this is async, the state value is not updated immediately
       // We should retrieve the previous state by using the function form of setState
       // Note that this function we pass in can also take in the props as a second argument
       // ex: (prevState, props) => { return { numVal: prevState.numVal + props.increment } }
       this.setState((prevState) => {
           return {
               numVal: prevState.numVal + 1,
           };
        });
        // React would otherwise batch the state updates and cause issues.

    }
    
    render() {
        return (
            <div>
                <h1>Count: {this.state.numVal}</h1>
                <button onClick={() => this.increment()}>
                    {this.state.ButtonText}
                </button>
            </div>
        );
    }
}

export default StatefulClassComponent_2;