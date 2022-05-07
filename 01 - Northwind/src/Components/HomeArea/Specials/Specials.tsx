import "./Specials.css";

// Conditional Rendering

function Specials(): JSX.Element {

    function isWeekend(): boolean {
        const now = new Date();
        const day = now.getDay() + 1; // 1 = Sunday, 2 = Monday
        return day >= 6;
    }

    return (
        <div className="Specials Box">
            <p>
                Our specials:

                {isWeekend() ? " Pizza " : " Pasta "}

                |
                
                {isWeekend() && " Cholent " }

                {!isWeekend() && " Fish & Chips " }

            </p>
        </div>
    );
}

export default Specials;
