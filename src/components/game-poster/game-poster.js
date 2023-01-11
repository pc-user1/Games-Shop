import React from "react";
import "./game-poster.css";

export const GamePoster = ({ image = "" }) => {
  return (
    <div className="game-poster" style={{ backgroundImage: `url(${image})` }} />
  );
};
