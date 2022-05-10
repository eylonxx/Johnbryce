import ProductModel from '../Models/ProductModel';

export class ProductsState {
  public products: ProductModel[] = [];
}

export enum ProductsActionType {
  FetchProducts = 'FetchProducts',
  AddProduct = 'AddProduct',
  UpdateProduct = 'UpdateProduct',
  DeleteProduct = 'DeleteProduct',
}

export interface ProductsAction {
  type: ProductsActionType;
  payload: any;
}

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

export function productsReducer(currentState: ProductsState, action: ProductsAction): ProductsState {
  const newState = { ...currentState };
  switch (action.type) {
    case ProductsActionType.FetchProducts:
      newState.products = action.payload;
      break;
    case ProductsActionType.AddProduct:
      newState.products.push(action.payload);
      break;
    case ProductsActionType.UpdateProduct:
      const indexToUpdate = newState.products.findIndex((p) => p.id === action.payload.id);
      if (indexToUpdate >= 0) {
        newState.products[indexToUpdate] = action.payload;
      }
      break;
    case ProductsActionType.DeleteProduct:
      const indexToDelete = newState.products.findIndex((p) => p.id === action.payload.id);
      if (indexToDelete >= 0) {
        newState.products.splice(indexToDelete, 1);
      }
      break;
  }
  return newState;
}
