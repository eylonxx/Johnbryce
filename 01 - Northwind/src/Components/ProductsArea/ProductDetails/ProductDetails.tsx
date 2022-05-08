import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import config from "../../../Utils/Config";
import "./ProductDetails.css";

function ProductDetails(): JSX.Element {

    // React Hook for getting the route parameter values in the current route:
    const params = useParams();

    const [product, setProduct] = useState<ProductModel>();

    useEffect(() => {

        // Take the value:
        const id: number = +params.prodId; // prodId is the name of the route parameter.

        productsService.getOneProduct(id)
            .then(product => setProduct(product))
            .catch(err => alert(err.message));

    }, []);

    return (
        <div className="ProductDetails Box">

            <h2>Product Details</h2>

            {
                product && <>
                    <h3>{product.name}</h3>
                    <h3>Price: ${product.price}</h3>
                    <h3>Stock: {product.stock}</h3>
                    <img src={config.productImagesUrl + product.imageName} />
                    <br /><br />

                    <NavLink to="/products">Back to List</NavLink>
                    <span> | </span>

                    {/* Need form */}
                    <NavLink to="#">Update</NavLink>
                    <span> | </span>

                    {/* Can call delete from here */}
                    <NavLink to="#">Delete</NavLink>
                </>
            }

        </div>
    );
}

export default ProductDetails;
