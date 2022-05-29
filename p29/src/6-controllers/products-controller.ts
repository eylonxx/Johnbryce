import express, { NextFunction, Request, Response } from 'express';
import productsLogic from '../5-logic/products-logic';

const router = express.Router();

router.get('/products', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await productsLogic.getAllProducts();
    res.json(products);
  } catch (e: any) {
    next(e);
  }
});

router.get('/products/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = +req.params.id;
    const product = await productsLogic.getOneProduct(id);
    res.json(product);
  } catch (e: any) {
    next(e);
  }
});

export default router;
