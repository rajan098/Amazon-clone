import React from "react";
import "./Checkout.css";
import Checkoutproduct from "./Checkoutproduct";
import { useStateValue } from "./StateProvider";
import Subtol from "./Subtol";

function Checkout() {
  const[{basket,user},dispatch]=useStateValue();
  return (
    <div className="Checkout">
      <div className="Checkout__left">
        <img
          className="Checkout__ad"
          src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
          alt=""
        />
        <div>
          <h2>Hello, {user?.email}</h2>
          <h1 className="Checkout__title">Your'e Shopping Basket</h1>
          {basket.map(item=>(
            <Checkoutproduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}
        
        </div>
      </div>
      <div className="Checkout__right">
         <Subtol/>

          </div>
    </div>
  );
}

export default Checkout;
