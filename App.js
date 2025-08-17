/*    <div class="parent">
        <div class="child">
            <h1>I am H1</h1>
            <h2>I am H2</h2> 
        </div> 
        <div class="child2">
            <h1>I am H1</h1>
            <h2>I am H2</h2>
        </div>
       </div>
*/

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I am H1"),
        React.createElement("h2", {}, "I am H2")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am H1"),
        React.createElement("h2", {}, "I am H2")
    ])
]);

console.log(parent)

// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);