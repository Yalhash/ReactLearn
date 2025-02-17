import React, { Component } from "react";


class StatefulClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            message: "Click the button!",
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.setState({ message: "Thanks :)" })}>
                    Click here!
                </button>
            </div>
        );
    }
}

export default StatefulClassComponent;