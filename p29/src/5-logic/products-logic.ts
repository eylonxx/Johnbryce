import { OkPacket } from 'mysql';
import dal from '../2-utils/dal';
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

async function getOneProduct(id: number): Promise<ProductModel[]> {
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
  return products;
}

async function addProduct(product: ProductModel): Promise<ProductModel> {
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
  const sql = `
  UPDATE 
  products
  SET ProductName = '${product.name}', UnitPrice = ${product.price}, UnitsInStock = ${product.stock}
  WHERE ProductID = ${product.id}
  `;
  const result: OkPacket = await dal.execute(sql);
  return product;
}

export default { getAllProducts, getOneProduct, addProduct, updateFullProduct };
