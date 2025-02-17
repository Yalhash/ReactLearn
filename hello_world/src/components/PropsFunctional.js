import React from "react";

const PropsFunctional = (props) => {
    console.log(props);
    return (
        <div>
        <h1>Functional Component With Properties</h1>
        {props.children}
        <h2>{props.name}</h2>
        </div>
    );
}

export default PropsFunctional;