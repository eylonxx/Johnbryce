import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../../AboutArea/About/About';
import Home from '../../HomeArea/Home/Home';
import AddProduct from '../../ProductsArea/AddProduct/AddProduct';
import EditProduct from '../../ProductsArea/EditProduct.tsx/EditProduct';
import ProductDetails from '../../ProductsArea/ProductDetails/ProductDetails';
import ProductList from '../../ProductsArea/ProductList/ProductList';
import PageNotFound from '../PageNotFound/PageNotFound';
import './Routing.css';

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      {/* All Routes Collection: */}
      <Routes>
        {/* Home: */}
        <Route path="/home" element={<Home />} />

        {/* Product list: */}
        <Route path="/products" element={<ProductList />} />

        {/* /:prodId is a route parameter */}
        <Route path="/products/details/:prodId" element={<ProductDetails />} />

        {/* /:prodId is a route parameter */}
        <Route path="/products/edit/:prodId" element={<EditProduct />} />

        {/* Add new product: */}
        <Route path="products/new" element={<AddProduct />} />

        {/* About: */}
        <Route path="/about" element={<About />} />

        {/* Default Route - first way:  */}
        {/* <Route path="" element={<Home />} /> */}

        {/* Default Route - second way:  */}
        <Route path="" element={<Navigate to="/home" />} />

        {/* Page Not Found - first way: */}
        {/* <Route path="*" element={<Navigate to="/home" />} /> */}

        {/* Page Not Found - second way: */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Routing;
