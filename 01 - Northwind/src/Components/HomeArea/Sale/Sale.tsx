import "./Sale.css";

interface SaleProps {
    percent: number;
    category: string;
}

function Sale(props: SaleProps): JSX.Element {
    return (
        <div className="Sale Box">
			<p>Sale: {props.percent}% discount on all {props.category}!</p>
        </div>
    );
}

export default Sale;
