import { SyntheticEvent } from "react";
import "./Recommend.css";

// Invoking Events

function Recommend(): JSX.Element {

    function recommend1(): void {
        alert("Irish Coffee");
    }

    function recommend2(args: SyntheticEvent): void {
        console.log(args);
        alert("Vanilla Coffee");
    }

    function recommend3(item: string): void {
        alert(item);
    }

    return (
        <div className="Recommend Box">
            <span>Recommendation: </span>
            <button onClick={recommend1}>Product 1</button>
            <button onClick={recommend2}>Product 2</button>
            <button onClick={() => recommend3("Black Coffee")}>Product 3</button>
        </div>
    );
}

export default Recommend;
