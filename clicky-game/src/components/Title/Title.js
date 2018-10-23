import React from "react";

const Title = props => (
    <h1 className="header">
    {props.children}
        <h1>Celebrity Clicky Game!</h1>
        <p>Click on an image to earn points, but don't click on any more than once!</p>
    </h1>
);
export default Title;
