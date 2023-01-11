import React from "react";
import { Link } from "react-router-dom";
import { CartBlock } from "../cart-block/";
import { GameIcon } from "../game-icon/";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header__store-title">
          <Link to="/">
            <GameIcon /> <span>Games Shop</span>
            <span className="size-reg">&reg;</span>
          </Link>
        </div>
        <div className="wrapper header__cart-btn-wrapper">
          <CartBlock />
        </div>
      </div>
    </div>
  );
};
