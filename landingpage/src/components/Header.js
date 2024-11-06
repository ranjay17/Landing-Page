import "../CSS/Header.css";
import { FOODTRUCKLOGO, PIZZAIMG } from "../const";

const Header = () => {
  return (
    <header className="header">
      <img src={FOODTRUCKLOGO} alt="Food Truck Logo" className="header-image" />
      <img src={PIZZAIMG} alt="Pizza" className="page-image" />
      <p className="contact">Get In Touch</p>
      <h1 className="header-para">
        Discover the <span style={{ color: "red" }}>Best</span> Food and Drinks
      </h1>
      <p className="tagline-para">
        Naturally made Healthcare Products for the better care & support of your
        body.
      </p>
      <button className="explore-page">Explore Now!</button>
    </header>
  );
};

export default Header;
