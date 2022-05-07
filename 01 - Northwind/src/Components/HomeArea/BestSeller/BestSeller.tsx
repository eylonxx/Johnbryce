import { useState } from "react";
import "./BestSeller.css";

function BestSeller(): JSX.Element {

    const arr = useState<string>(""); // <> is called Generic, the "" is the default value
    const item = arr[0]; // 1. This is the item we need to display
    const setItem = arr[1]; // 2. This is a function for changing the item and rerendering the component

    // Destructuring Assignment Syntax: 
    const [price, setPrice] = useState<number>(0);

    function show(): void {
        setItem("Coffee"); // (a) change item, (b) rerender the component
        setPrice(12.5);
        // alert("Best Seller Product: " + item);
    }

    return (
        <div className="BestSeller Box">
            <button onClick={show}>Best Seller Product</button>
            Best Seller Product: {item}, ₪{price}
        </div>
    );

}

export default BestSeller;
