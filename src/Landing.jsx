import { Link } from "react-router-dom";
import "./App.css";

function Landing() {
  return (
    <div>
      <div className="bg"></div>

      <div className="container">
        <div className="left">
          <h2 style={{color: "white", fontSize: "55px", textAlign: "center"}}>Welcome To<br/> Paradise Nursery</h2>
          <p style={{color: "rgb(77, 76, 76)", fontWeight: "bold", fontSize: "24px", fontStyle: "italic"}}>Where Green Meets Serenity</p>
          <br/>
          <Link to="/products">
            <button className="start">Get started</button>
          </Link>
        </div>
        <div className="right" style={{color: "white"}}>
          <h3 style={{fontWeight: "bold", fontSize: "30px"}}>Welcome to Paradise Nursery, where green meets serenity!</h3>
          <p style={{fontSize: "22px"}}>
            At Paradise Nursery, we are passionate about bringing nature closer
            to you. Our mission is to provide a wide range of high-quality plants
            that not only enhance the beauty of your surroundings but also
            contribute to a healthier and more sustainable lifestyle.
          </p>
          <p style={{fontSize: "22px"}}>
            Our team of experts is dedicated to ensuring that each plant meets
            our strict standards of quality and care. Whether you're a seasoned
            gardener or just starting your green journey, we have something for
            everyone.
          </p>
          <p style={{fontSize: "22px"}}>
            Join us in our mission to create a greener, healthier world. Visit
            Paradise Nursery today and experience the beauty of nature right at
            your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;