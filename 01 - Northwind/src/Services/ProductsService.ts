import axios from "axios";
import ProductModel from "../Models/ProductModel";
import config from "../Utils/Config";

class ProductsService {

    public async getAllProducts() : Promise<ProductModel[]> {
        const response = await axios.get<ProductModel[]>(config.productsUrl);
        const products = response.data;
        return products;
    }

}

const productsService = new ProductsService();

export default productsService;

