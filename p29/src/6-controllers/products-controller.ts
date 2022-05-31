import e from 'express';
import express, { NextFunction, Request, Response } from 'express';
import { request } from 'http';
import ProductModel from '../4-models/product-model';
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

router.get('/products-by-range/:min/:max', async (req, res, next) => {
  try {
    const min = +req.params.min;
    const max = +req.params.max;
    const products = await productsLogic.getRange(min, max);
    res.json(products);
  } catch (e: any) {
    next(e);
  }
});

router.post('/products', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = new ProductModel(req.body);
    const addedproduct = await productsLogic.addProduct(product);
    res.status(201).json(addedproduct);
  } catch (e: any) {
    next(e);
  }
});

router.put('/products/:id', async (req, res, next) => {
  try {
    req.body.id = req.params.id;
    const product = new ProductModel(req.body);
    const updatedproduct = await productsLogic.updateFullProduct(product);
    res.status(201).json(updatedproduct);
  } catch (e: any) {
    next(e);
  }
});

router.patch('/products/:id', async (req, res, next) => {
  try {
    req.body.id = req.params.id;
    const product = new ProductModel(req.body);
    const updatedproduct = await productsLogic.updateParitalProduct(product);
    res.status(201).json(updatedproduct);
  } catch (e: any) {
    next(e);
  }
});

router.delete('/products/:id([0-9]+)', async (request: Request, response: Response, next: NextFunction) => {
  try {
    const id = +request.params.id;
    await productsLogic.deleteProduct(id);
    response.sendStatus(204);
  } catch (err: any) {
    next(err);
  }
});

export default router;
