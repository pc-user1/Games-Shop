import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GamePoster } from "../game-poster";
import { GameBuy } from "../game-buy";
import { Genre } from "../genre";
import { setCurrentGame } from "../../redux/games/reducer";
import "./game-item.css";

export const GameItems = ({ props }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentGame(props));
    navigate(`/Games-Shop/${props.title}`);
  };

  return (
    <div className="game-item" onClick={handleClick}>
      <GamePoster image={props.image} />
      <div className="game-item__details">
        <span className="game-item__title">{props.title}</span>
        <div className="game-item__genre">
          {props.genres.map((genre) => (
            <Genre genre={genre} key={genre} />
          ))}
        </div>
        <div className="game-item__buy">
          <GameBuy props={props} />
        </div>
      </div>
    </div>
  );
};

GameItems.propTypes = {
  title: PropTypes.string,
  genres: PropTypes.array,
};
