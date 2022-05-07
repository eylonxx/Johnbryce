import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import "./ProductList.css";

function ProductList(): JSX.Element {

    // State to handle products: 
    const [products, setProducts] = useState<ProductModel[]>([]);

    // Get products from backend once:
    useEffect(() => {
        productsService.getAllProducts()
            .then(products => setProducts(products))
            .catch(err => alert(err.message));
    }, []);

    return (
        <div className="ProductList">

            {/* Display name + price in a border */}
            {products.map(p =>
                <div className="Box">
                    <span>{p.name} (${p.price})</span>
                </div>
            )}

        </div>
    );
}

export default ProductList;
