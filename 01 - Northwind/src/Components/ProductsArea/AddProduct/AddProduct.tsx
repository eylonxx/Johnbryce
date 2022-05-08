import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import "./AddProduct.css";

function AddProduct(): JSX.Element {

    const navigate = useNavigate();

    const { register, handleSubmit, formState } = useForm<ProductModel>();

    async function send(product: ProductModel) {
        try {
            const addedProduct = await productsService.addProduct(product);
            alert("Product added! id: " + addedProduct.id); // Never show IDs to the user! This is only for dev testing!
            navigate("/products");
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="AddProduct Box">

            <h2>Add Product</h2>

            <form onSubmit={handleSubmit(send)}>

                <label>Name: </label>
                <input type="text" {...register("name", {
                    required: { value: true, message: "Missing name"},
                    minLength: { value: 3, message: "Name too short"},
                    maxLength: { value: 50, message: "Name too long"}
                })} />
                <span>{formState.errors.name?.message}</span>

                <label>Price: </label>
                <input type="number" step="0.01" {...register("price", {
                    required: { value: true, message: "Missing price"},
                    min: { value: 0, message: "Price can't be negative"},
                    max: { value: 1000, message: "Price can't exceeds 1000"}
                })} />
                <span>{formState.errors.price?.message}</span>

                <label>Stock: </label>
                <input type="number" {...register("stock", {
                    required: { value: true, message: "Missing stock"},
                    min: { value: 0, message: "Stock can't be negative"},
                    max: { value: 1000, message: "Stock can't exceeds 1000"},
                    // validate: { value: () => { return "abc"; }, message: "a"}
                })} />
                <span>{formState.errors.stock?.message}</span>

                <label>Image: </label>
                <input type="file" accept="image/*" {...register("image")} />

                <button>Add</button>

            </form>

        </div>
    );
}

export default AddProduct;
