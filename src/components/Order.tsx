import React, { useState } from "react";
import chicken from "../assets/images/chicken.png";
import "../styles/components/Order.scss";

function Order() {
  const [introTitleText] = useState("order now");

  const handleClick = () => {
    console.log("Order time!");
  };

  const orderCard = (
    <div className="order-card" onClick={handleClick}>
      <img
        alt="order now chicken man"
        className="order__img"
        src={chicken}
      ></img>
      <p className="order__title">{introTitleText}</p>
    </div>
  );

  return <div className="order order--wrapper"></div>;
}

export default Order;
