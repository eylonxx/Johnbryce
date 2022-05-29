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
export default { getAllProducts, getOneProduct };
