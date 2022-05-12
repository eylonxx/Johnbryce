import { useEffect, useState } from "react";
import store from "../../../Redux/Store";
import "./TotalProducts.css";

function TotalProducts(): JSX.Element {

    const [count, setCount] = useState<number>();

    useEffect(() => {

        setCount(store.getState().productsState.products.length);

        // Subscribe for changes:
        const unsubscribe = store.subscribe(() => {
            setCount(store.getState().productsState.products.length);
        });

        return () => {
            // Unsubscribe:
            unsubscribe();
        };

    }, []);

    return (
        <div className="TotalProducts">
			<span>Total Products: {count}</span>
        </div>
    );

}

export default TotalProducts;
