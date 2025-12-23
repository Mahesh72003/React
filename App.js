
import React from "react";
import ReactDOM from "react-dom/client";
const struct = React.createElement(
    "div",
    { id: "secondDiv" },
    React.createElement("h1", {}, "Hello React!!!"),
    React.createElement("p", {}, "lorem.......")
    
    
    
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(struct);








