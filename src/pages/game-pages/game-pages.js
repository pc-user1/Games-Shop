import React from "react";
import { useSelector } from "react-redux";
import { Genre } from "../../components/genre";
import { GameBuy } from "../../components/game-buy";
import { GamePoster } from "../../components/game-poster";
import "./game-pages.css";

export const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);

  if (!game) return null;

  return (
    <div className="game-page">
      <h2 className="game-page__title">{game.title}</h2>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="game-page__right">
          <GamePoster image={game.image} />
          <p>{game.description}</p>
          <p className="secondary-text">Gatunek:</p>
          {game.genres.map((genre) => (
            <Genre genre={genre} key={genre} />
          ))}
          <div className="game-page__buy-game">
            <GameBuy props={game} />
          </div>
        </div>
      </div>
    </div>
  );
};
