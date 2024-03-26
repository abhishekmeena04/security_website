import React from "react";
// import "./styles.css";
import Carousel from "./Carousel.jsx";

export default function App() {
  return (
    <Carousel>
      <div>
        <img
          className="object-cover"
          src="https://xpressguards.com/wp-content/uploads/2021/09/security-guard-company.jpg"
          alt="img1"
        />
      </div>
      <div>
        <img
          src="https://denetimservices.com/wp-content/uploads/2020/08/1.jpg"
          alt="img2"
        />
      </div>
      <div>
        <img src="img3.jpeg" alt="img3" />
      </div>
      <div>
        <img src="img7.jpeg" alt="img4" />
      </div>
    </Carousel>
  );
}
