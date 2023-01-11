import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";
import { Button } from "../button";
import "./game-buy.css";

export const GameBuy = ({ props }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === props.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(props.id));
    } else {
      dispatch(setItemInCart(props));
    }
  };

  return (
    <div className="game-buy">
      <span className="game-buy__price">{props.price} zł.</span>
      <Button
        onClick={handleClick}
        type={isItemInCart ? "secondary" : "primary"}
      >
        {isItemInCart ? "Usuń" : "Dodaj do koszyka"}
      </Button>
    </div>
  );
};
