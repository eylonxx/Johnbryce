import { useState } from "react";
import colorsService from "../../../Services/ColorsService";
import "./Beautiful.css";

function Beautiful(): JSX.Element {

    const [color, setColor] = useState<string>("");

    function paint(): void {
        // Get random color from a service:
        const randomColor = colorsService.getRandomColor();
        setColor(randomColor);
    }

    return (
        <div className="Beautiful Box" style={{ backgroundColor: color }}>
            <button onClick={paint}>Random Color</button>
        </div>
    );
}

export default Beautiful;
