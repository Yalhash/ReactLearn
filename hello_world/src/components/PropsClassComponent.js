import React, { Component } from "react";

class PropsClassComponent extends Component {
    render() {

        return (
            <div>
            <h1>Class Component with Properties</h1>
            {this.props.children}
            <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default PropsClassComponent;