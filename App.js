
import React from "react";
import ReactDOM from "react-dom/client";

const style={
    backgroundColor:"green"
}

const Title = () => { 
return (
    <div>
        <div>
            <h3>Hello this is from React</h3>
        </div>
        <div>
            <p>this is from react</p>
        </div>
    </div>
);
};

const Header = () => {
    return (
        <div style={{ backgroundColor: "red" }} className="SecondDiv">
            <div>
                <Title />
                <h1 style={style}>this is from react</h1>
            </div>
        </div>
    );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header/>);






