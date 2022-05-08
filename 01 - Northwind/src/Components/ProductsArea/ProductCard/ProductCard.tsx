import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import config from "../../../Utils/Config";
import "./ProductCard.css";

interface ProductCardProps {
    product: ProductModel;
}

function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <div className="ProductCard Box">

            {/* Product Data: */}
            <div>
                {props.product.name} <br />
                Price: ${props.product.price} <br />
                Stock: {props.product.stock}
            </div>

            {/* Product Image: */}
            <div>
                <NavLink to={"/products/details/" + props.product.id}>
                    <img src={config.productImagesUrl + props.product.imageName} />
                </NavLink>
            </div>

        </div>
    );
}

export default ProductCard;
