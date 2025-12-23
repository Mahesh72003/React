
import React from "react";
import ReactDOM from "react-dom/client";

const style={
    backgroundColor:"green"
}
const App = (
    <div>
        <div style={{backgroundColor:"red"}}>
            <h3>Hello this is from React</h3>
        </div>
        
        <h1 style={style}>this is from react</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(App);






