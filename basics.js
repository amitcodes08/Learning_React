import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// React Element
// const parent = React.createElement("div", {id: "parent"},[
//     React.createElement("div", {id: "child1"},
//         [React.createElement("h1", {}, "I am h1 tag from child 1"),
//         React.createElement("h2", {}, "I am h2 tag from child 1")]
//     ),
//     React.createElement("div", {id: "child2"},
//         [React.createElement("h1", {}, "I am h1 tag from child 2"),
//         React.createElement("h2", {}, "I am h2 tag from child 2")]
//     )
// ])

// JSX - JavaScript XML
const jxsHeading = <h1 className="Head">Hello World from JSX</h1>


// React Component
// Class based Component - OLD
// Functional Component - NEW
const HeadingComponent1 = function() {
    return <h1>This is a Functional Component</h1>
}

const HeadingComponent = () => {
    return (<div>
        <HeadingComponent1 />
        {heading}
        {jxsHeading}
        <h1>This is a Functional Component</h1>
    </div>)
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);


