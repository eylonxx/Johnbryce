import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">

            {/* Preserve SPA behavior: */}
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>

            {/* Will cancel SPA behavior: */}
			{/* <a href="/home">Home</a>
			<a href="/products">Products</a>
			<a href="/about">About</a> */}

        </div>
    );
}

export default Menu;
