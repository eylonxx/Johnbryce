import "./Desserts.css";

// Displaying Lists

function Desserts(): JSX.Element {

    function getRandomValue(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const items = [
        { id: 1, name: "Ice Cream", price: getRandomValue(10, 20) }, // Random price between 10 and 20
        { id: 2, name: "Apple Pie", price: getRandomValue(10, 20) },
        { id: 3, name: "Pavlova", price: getRandomValue(10, 20) },
        { id: 4, name: "Eclair", price: getRandomValue(10, 20) }
    ];

    return (
        <div className="Desserts Box">
            {items.map(item => <span key={item.id}>{item.name} - ₪{item.price} | </span>)}
        </div>
    );
}

export default Desserts;
