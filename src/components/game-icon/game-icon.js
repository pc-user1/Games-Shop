import React from "react";
import { GiRetroController } from "react-icons/gi";
import "./game-icon.css";

export const GameIcon = () => {
  return (
    <div className="game-icon">
      <GiRetroController size={50} className="game-block__icon" />
    </div>
  );
};
