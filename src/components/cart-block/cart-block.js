import React, { useState, useCallback } from "react";
import { BiCart } from "react-icons/bi";
import { useSelector } from "react-redux";
import { CartMenu } from "../cart-menu";
import { SumCart } from "../sum-cart";
import { calcTotalPrice } from "../total-price";
import { useNavigate } from "react-router-dom";
import "./cart-block.css";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((it) => it.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();
  const handleOrderClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/order-game");
  }, [navigate]);

  return (
    <div className="cart-block">
      <SumCart quantity={items.length} />
      <BiCart
        size={35}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />

      {totalPrice > 0 ? (
        <span className="cart-menu__total-price">{totalPrice} zł.</span>
      ) : null}
      {isCartMenuVisible && (
        <CartMenu items={items} onClick={handleOrderClick} />
      )}
    </div>
  );
};
