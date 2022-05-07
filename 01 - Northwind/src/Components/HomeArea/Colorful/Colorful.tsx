import { useState } from "react";
import "./Colorful.css";

function Colorful(): JSX.Element {

    const [color, setColor] = useState<string>("");

    function paintMe(): void {
        const colors = ["Red", "Green", "Blue", "Yellow", "Magenta"];
        const index = Math.floor(Math.random() * colors.length);
        const randomColor = colors[index];
        setColor(randomColor); // Will (a) change color, (b) rerender our component
    }

    return (
        <div className="Colorful Box" style={{ backgroundColor: color }}>
            <button onClick={paintMe}>Paint Me</button>
        </div>
    );
}

export default Colorful;
