import Beautiful from "../Beautiful/Beautiful";
import BestSeller from "../BestSeller/BestSeller";
import Clock from "../Clock/Clock";
import Colorful from "../Colorful/Colorful";
import Desserts from "../Desserts/Desserts";
import Discount from "../Discount/Discount";
import Recommend from "../Recommend/Recommend";
import Sale from "../Sale/Sale";
import Slogan from "../Slogan/Slogan";
import Specials from "../Specials/Specials";
import Support from "../Support/Support";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">

            {/* Interpolation: */}
            <Discount />

            {/* Conditional Rendering: */}
            <Specials />

            {/* Displaying Lists: */}
            <Desserts />

            {/* Invoking Events: */}
            <Recommend />

            {/* Props: */}
            <Sale percent={15} category="beverages" />
            <Sale percent={20} category="fruits" />
            <Slogan slogan="Exotic Products from Around the World" color="Magenta" background="DarkBlue" />
            <Slogan slogan="Amazing Products from Israel" color="Yellow" background="Black" />

            {/* State: */}
            <BestSeller />
            <Colorful />

            {/* useEffect */}
            <Clock />

            {/* Services: */}
            <Beautiful />

            {/* Config: */}
            <Support />
            

        </div>
    );
}

export default Home;
