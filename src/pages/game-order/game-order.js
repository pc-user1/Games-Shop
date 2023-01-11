import React from "react";
import { OrderItem } from "../../components/order-item";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../components/total-price";
import { useNavigate } from "react-router-dom";
import { ImSad } from "react-icons/im";
import { Button } from "../../components/button";
import "./game-order.css";

export const GameOrder = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login/");
  };

  if (items.length < 1) {
    return (
      <h2>
        Koszyk pusty <ImSad />
      </h2>
    );
  }

  return (
    <div className="game-order">
      <div className="game-order__left">
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className="game-order__right">
        <div className="game-order__total-price">
          <p className="price-summary__total">
            {items.length} produkty na sumę: {calcTotalPrice(items)} zł.
          </p>
        </div>
      </div>
      <div className="button-place">
        <Button type="primary" size="m" onClick={handleClick}>
          Kontynuuj zakupy
        </Button>
      </div>
    </div>
  );
};
