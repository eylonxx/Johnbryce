import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import ProductCard from "../ProductCard/ProductCard";
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

            <NavLink to="/products/new"> ➕ </NavLink>

            {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
    );
}

export default ProductList;
