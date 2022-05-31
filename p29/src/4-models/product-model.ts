import Joi from 'joi';

class ProductModel {
  public id: number;
  public name: string;
  public price: number;
  public stock: number;

  public constructor(product: ProductModel) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.stock = product.stock;
  }

  private static postValidationSchema = Joi.object({
    id: Joi.forbidden(),
    name: Joi.string().required().min(2).max(100),
    price: Joi.number().required().min(0).max(1000),
    stock: Joi.number().required().integer().min(0).max(10000),
  });

  private static putValidationSchema = Joi.object({
    id: Joi.number().required().integer().min(1),
    name: Joi.string().required().min(2).max(100),
    price: Joi.number().required().min(0).max(1000),
    stock: Joi.number().required().integer().min(0).max(10000),
  });

  private static patchValidationSchema = Joi.object({
    id: Joi.number().required().integer().min(1),
    name: Joi.string().optional().min(2).max(100),
    price: Joi.number().optional().min(0).max(1000),
    stock: Joi.number().optional().integer().min(0).max(10000),
  });

  public validatePost(): string {
    const result = ProductModel.postValidationSchema.validate(this);
    return result.error?.message;
  }
  public validatePut(): string {
    const result = ProductModel.putValidationSchema.validate(this);
    return result.error?.message;
  }
  public validatePatch(): string {
    const result = ProductModel.patchValidationSchema.validate(this);
    return result.error?.message;
  }
}
export default ProductModel;
