import { FOODTRUCKLOGO } from "../const";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={FOODTRUCKLOGO} alt="Footer Logo" className="footer-img" />
      <div className="contact-info">
        <h2 className="contact-title">Contact Us</h2>
        <address className="contact-address">
          Lorem Ipsum Pvt Ltd.
          <br />
          5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
          <br />
          example2020@gmail.com
          <br />
          (904) 443-0343
        </address>
      </div>
      <nav className="footer-nav">
        <h2 className="more">More</h2>
        <ul className="about-us">
          <li>About Us</li>
          <li>Products</li>
          <li>Career</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div className="social-link">Social Links</div>
      <p className="copyright">© 2022 Food Truck Example</p>
    </footer>
  );
};

export default Footer;
