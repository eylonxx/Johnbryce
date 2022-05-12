import axios from "axios";
import ProductModel from "../Models/ProductModel";
import { fetchProductsAction, addProductAction, updateProductAction, deleteProductAction } from "../Redux/ProductsState";
import store from "../Redux/Store";
import config from "../Utils/Config";

class ProductsService {

    // Get all products: 
    public async getAllProducts(): Promise<ProductModel[]> {
        let products = store.getState().productsState.products;
        if (products.length === 0) {
            const response = await axios.get<ProductModel[]>(config.productsUrl);
            products = response.data;
            store.dispatch(fetchProductsAction(products)); // Add products to Redux
        }
        return products;
    }

    // Get one product by id: 
    public async getOneProduct(id: number): Promise<ProductModel> {
        const products = await this.getAllProducts();
        const product = products.find(p => p.id === id);
        return product;
    }

    // Add new product:
    public async addProduct(product: ProductModel): Promise<ProductModel> {

        // Posting an object containing only data without files:
        // const response = await axios.post<ProductModel>(config.productsUrl, product);

        // For sending data + files we need to send FormData object

        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price.toString()); // Can send only strings (and files).
        formData.append("stock", product.stock.toString());
        formData.append("image", product.image.item(0));

        const response = await axios.post<ProductModel>(config.productsUrl, formData);
        const addedProduct = response.data;

        store.dispatch(addProductAction(addedProduct));

        return addedProduct;
    }

    // Update existing product:
    public async updateProduct(product: ProductModel): Promise<ProductModel> {
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price.toString()); // Can send only strings (and files).
        formData.append("stock", product.stock.toString());
        formData.append("image", product.image.item(0));
        const response = await axios.put<ProductModel>(config.productsUrl + product.id, formData);
        const updatedProduct = response.data;
        store.dispatch(updateProductAction(updatedProduct));
        return updatedProduct;
    }

    // Delete existing product by id: 
    public async deleteProduct(id: number): Promise<void> {
        await axios.delete(config.productsUrl + id);
        store.dispatch(deleteProductAction(id));
    }

}

const productsService = new ProductsService();

export default productsService;

