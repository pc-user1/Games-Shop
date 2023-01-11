import React from "react";
import "./sum-cart.css";

export const SumCart = ({ quantity = 0 }) => {
  return quantity > 0 ? <div className="sum-cart">{quantity}</div> : "";
};
