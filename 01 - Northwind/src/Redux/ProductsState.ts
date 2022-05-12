import ProductModel from "../Models/ProductModel";

// 1. Products State - The global state relate to products:
export class ProductsState {
    public products: ProductModel[] = [];
}

// 2. Products Action Type - list of actions we can do on the above ProductsState:
export enum ProductsActionType {
    FetchProducts = "FetchProducts",
    AddProduct = "AddProduct",
    UpdateProduct = "UpdateProduct",
    DeleteProduct = "DeleteProduct",
    // AddProductToCart = "AddProductToCart"
}

// 3. Product Action - interface for building a single action from the above ProductsActionType
export interface ProductsAction {
    type: ProductsActionType; // The type of the acton to perform.
    payload: any; // The data we need to do that action
}

// 4. Action Creators - Functions for creating suitable Action objects: 
export function fetchProductsAction(products: ProductModel[]): ProductsAction {
    const action: ProductsAction = { type: ProductsActionType.FetchProducts, payload: products };
    return action;
}
export function addProductAction(product: ProductModel): ProductsAction {
    const action: ProductsAction = { type: ProductsActionType.AddProduct, payload: product };
    return action;
}
export function updateProductAction(product: ProductModel): ProductsAction {
    const action: ProductsAction = { type: ProductsActionType.UpdateProduct, payload: product };
    return action;
}
export function deleteProductAction(id: number): ProductsAction {
    const action: ProductsAction = { type: ProductsActionType.DeleteProduct, payload: id };
    return action;
}

// 5. Products Reducer - Do any of the above actions:
export function productsReducer(currentState: ProductsState = new ProductsState(), action: ProductsAction): ProductsState {
    const newState = { ...currentState };

    switch (action.type) {

        case ProductsActionType.FetchProducts:
            newState.products = action.payload; // <-- here payload is all products
            break;

        case ProductsActionType.AddProduct:
            newState.products.push(action.payload); // <-- here payload is the product to add.
            break;

        case ProductsActionType.UpdateProduct:
            const indexToUpdate = newState.products.findIndex(p => p.id === action.payload.id); // <-- here payload is the product to update.
            if(indexToUpdate >= 0) {
                newState.products[indexToUpdate] = action.payload;
            }
            break;

        case ProductsActionType.DeleteProduct:
            const indexToDelete = newState.products.findIndex(p => p.id === action.payload); // <-- here payload is the id to delete.
            if(indexToDelete >= 0) {
                newState.products.splice(indexToDelete, 1);
            }
            break;
    }

    return newState;
}

