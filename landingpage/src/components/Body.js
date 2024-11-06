import "../CSS/Body.css";
import { BODYPAGEIMG } from "../const";

const Body = () => {
  return (
    <section className="body">
      <img src={BODYPAGEIMG} alt="Body Section" className="body-image" />
      <div className="about-text">
        <h1 className="title">About Us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        <a href="#read-more" className="read-more">
          Read More
        </a>
      </div>
    </section>
  );
};

export default Body;
