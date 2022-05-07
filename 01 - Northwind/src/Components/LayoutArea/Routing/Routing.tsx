import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Home from "../../HomeArea/Home/Home";
import ProductList from "../../ProductsArea/ProductList/ProductList";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">

            {/* All Routes Collection: */}
            <Routes>

                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
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
