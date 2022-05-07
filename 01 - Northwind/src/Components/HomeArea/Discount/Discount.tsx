import "./Discount.css";

// Interpolation

function Discount(): JSX.Element {

    const percent = 10; // Demo for getting the data from backend

    return (
        <div className="Discount Box">
			<p>Only now - {percent}% discount on all products!</p>
        </div>
    );
}

export default Discount;
