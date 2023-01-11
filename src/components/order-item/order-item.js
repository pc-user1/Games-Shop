import React from "react";
import { GamePoster } from "../game-poster";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../redux/cart/reducer";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./order-item.css";

export const OrderItem = ({ game }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };

  return (
    <div className="order-item">
      <div className="order-item__poster">
        <GamePoster image={game.image} />
      </div>
      <div className="order-item__title">
        <span>{game.title}</span>
      </div>
      <div className="order-item__price">
        <span>{game.price} zł.</span>
        <AiOutlineCloseCircle
          size={25}
          className="cart-item__delelete-icon"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
