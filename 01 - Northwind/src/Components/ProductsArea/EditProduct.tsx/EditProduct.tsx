import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import ProductModel from '../../../Models/ProductModel';
import productsService from '../../../Services/ProductsService';
import './EditProduct.css';

function EditProduct(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const { register, handleSubmit, formState, setValue } = useForm<ProductModel>();

  const [stateProduct, setProduct] = useState<ProductModel>();

  useEffect(() => {
    const id: number = +params.prodId;
    productsService
      .getOneProduct(id)
      .then((product) => {
        setProduct(product);
        setValue('name', product.name);
        setValue('price', product.price);
        setValue('stock', product.stock);
      })
      .catch((e) => console.log(e));
  });

  async function send(formProduct: ProductModel) {
    try {
      formProduct.id = stateProduct.id;
      const updatedProduct = await productsService.updateProduct(formProduct);
      alert('Product Edited! id: ' + updatedProduct.id); // Never show IDs to the user! This is only for dev testing!
      console.log(updatedProduct);

      navigate('/products');
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <div className="EditProduct Box">
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit(send)}>
        <label>Name: </label>
        <input
          type="text"
          {...register('name', {
            required: { value: true, message: 'Missing name' },
            minLength: { value: 3, message: 'Name too short' },
            maxLength: { value: 50, message: 'Name too long' },
          })}
        />
        <span>{formState.errors.name?.message}</span>

        <label>Price: </label>
        <input
          type="number"
          step="0.01"
          {...register('price', {
            required: { value: true, message: 'Missing price' },
            min: { value: 0, message: "Price can't be negative" },
            max: { value: 1000, message: "Price can't exceeds 1000" },
          })}
        />
        <span>{formState.errors.price?.message}</span>

        <label>Stock: </label>
        <input
          type="number"
          {...register('stock', {
            required: { value: true, message: 'Missing stock' },
            min: { value: 0, message: "Stock can't be negative" },
            max: { value: 1000, message: "Stock can't exceeds 1000" },
            // validate: { value: () => { return "abc"; }, message: "a"}
          })}
        />
        <span>{formState.errors.stock?.message}</span>

        <label>Image: </label>
        <input type="file" accept="image/*" {...register('image')} />

        <button>Edit</button>
      </form>
    </div>
  );
}

export default EditProduct;
