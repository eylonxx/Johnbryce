import { OkPacket } from 'mysql';
import dal from '../2-utils/dal';
import { ResourceNotFoundError, ValidationError } from '../4-models/errors-model';
import ProductModel from '../4-models/product-model';

async function getAllProducts(): Promise<ProductModel[]> {
  const sql = `
    SELECT
    ProductID AS id,
    ProductName AS name,
    UnitPrice AS price,
    UnitsInStock as stock
    FROM products
    `;
  const products = await dal.execute(sql);
  return products;
}

async function getOneProduct(id: number): Promise<ProductModel> {
  const sql = `
    SELECT
    ProductID AS id,
    ProductName AS name,
    UnitPrice AS price,
    UnitsInStock as stock
    FROM products
    WHERE ProductID = ${id}
    `;
  const products = await dal.execute(sql);
  const product = products[0];
  return product;
  if (!product) {
    throw new ResourceNotFoundError(id);
  }
}

async function addProduct(product: ProductModel): Promise<ProductModel> {
  const errors = product.validatePost();
  if (errors) {
    throw new ValidationError(errors);
  }
  const sql = `
  INSERT INTO 
  products(ProductName, UnitPrice, UnitsInStock)
  VALUES('${product.name}', ${product.price}, ${product.stock})
  `;
  const result: OkPacket = await dal.execute(sql);
  product.id = result.insertId;
  return product;
}

async function updateFullProduct(product: ProductModel): Promise<ProductModel> {
  const errors = product.validatePut();
  if (errors) {
    throw new ValidationError(errors);
  }
  const sql = `
  UPDATE 
  products
  SET ProductName = '${product.name}', UnitPrice = ${product.price}, UnitsInStock = ${product.stock}
  WHERE ProductID = ${product.id}
  `;
  const result: OkPacket = await dal.execute(sql);
  if (result.affectedRows === 0) {
    throw new ResourceNotFoundError(product.id);
  }
  return product;
}
async function updateParitalProduct(product: ProductModel): Promise<ProductModel> {
  const errors = product.validatePatch();
  if (errors) {
    throw new ValidationError(errors);
  }
  const dbProduct = await getOneProduct(product.id);
  for (const prop in product) {
    if (product[prop] !== undefined) {
      dbProduct[prop] = product[prop];
    }
  }
  const updatedProduct = await updateFullProduct(dbProduct);
  return updatedProduct;
}

async function deleteProduct(id: number): Promise<void> {
  const sql = `
  DELETE FROM 
  products 
  WHERE ProductID = ${id}
  `;
  const result = await dal.execute(sql);
  if (result.affectedRows === 0) {
    throw new ResourceNotFoundError(id);
  }
}

export default { getAllProducts, getOneProduct, addProduct, updateFullProduct, updateParitalProduct, deleteProduct };
