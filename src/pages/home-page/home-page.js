import React from "react";
import "./home-page.css";
import { GameItems } from "../../components/game-item";

const GAMES = [
  {
    image: "/game-posters/Civilization6.jpg",
    title: "Sid Meier's Civilization® VI",
    genres: ["Strategiczne", "Wieloosobowe"],
    price: 257,
    video: "https://www.youtube.com/embed/5KdE0p2joJw",
    id: 1,
    description:
      "Civilization VI zapewnia całkiem nowe możliwości interakcji ze światem, poszerzania granic swojego imperium, rozwoju kultury i konkurowania z największymi przywódcami historii w walce o stworzenie cywilizacji, która wytrzyma próbę czasu.",
  },
  {
    image: "/game-posters/stalker2.jpg",
    title: "S.T.A.L.K.E.R. 2: Heart of Chornobyl",
    genres: ["Postapokaliptyczne", "Survival"],
    video: "https://www.youtube.com/embed/0ZqMt74hO6U",
    price: 215,
    id: 2,
    description:
      "Poznaj sekrety zakazanej zony w Czarnobylu, gdzie czekają na ciebie zabójczy wrogowie, śmiertelne anomalie i potężne artefakty. Przebijając się przez Serce Czarnobyla poznasz też swoją historię. Z rozmysłem wybieraj drogę, ponieważ twoje działania wpływają na przyszłość całej ludzkości.",
  },
  {
    image: "/game-posters/mw3.jpg",
    title: "Call of Duty®: Modern Warfare® II",
    genres: ["FPS", "Akcja", "Strzelanka", "Wojna"],
    video: "https://www.youtube.com/embed/r72GP1PIZa0",
    price: 349,
    id: 3,
    description:
      "W Call of Duty®: Modern Warfare® II kultowi Operatorzy z grupy uderzeniowej 141 powracają, a gracze trafiają w sam środek globalnego konfliktu o niespotykanej dotąd skali.",
  },
  {
    image: "/game-posters/Red_Dead_Redemption_2.jpg",
    title: "Red Dead Redemption 2",
    genres: ["Otwarty świat", "Bogata fabuła", "Akcja"],
    video: "https://www.youtube.com/embed/eaW0tYpxyp0",
    price: 249,
    id: 4,
    description:
      "RDR2, które zdobyło ponad 250 doskonałych ocen i 175 nagród dla gry roku, to spektakularna opowieść o Arthurze Morganie i niesławnym gangu van der Lindego w czasach u zarania współczesności. Zawiera teżakże dostęp do współdzielonego przez graczy i tętniącego życiem świata Red Dead Online.",
  },
  {
    image: "/game-posters/cyberpunk_2077.jpg",
    title: "Cyberpunk 2077",
    video: "https://www.youtube.com/embed/8X2kIfS6fb8",
    genres: ["Cyberpunk", "Otwarty świat", "RPG", "FPS"],
    price: 199,
    id: 5,
    description:
      "Cyberpunk 2077 to pełna akcji gra role-playing, której akcja toczy się w Night City, megalopolis rządzonym przez obsesyjną pogoń za władzą, sławą i przerabianiem własnego ciała.",
  },
  {
    image: "/game-posters/skyrim.jpg",
    title: "The Elder Scrolls V: Skyrim Special Edition",
    genres: ["Otwarty świat", "RPG", "Przygodowe"],
    video: "https://www.youtube.com/embed/JSRtYpNRoN0",
    price: 169,
    id: 6,
    description:
      "Special Edition zawiera pełną wersję gry oraz wszystkie dodatki, a także zupełnie nowe opcje, takie jak odświeżona grafika i efekty dźwiękowe, wolumetryczne promienie słoneczne, dynamiczna głębia ostrości, odbicia przestrzenne i nie tylko. Skyrim Special Edition przenosi też potęgę modów na konsole.",
  },
];

export function HomePage() {
  return (
    <div className="home-page">
      {GAMES.map((game) => (
        <GameItems props={game} id={game.id} />
      ))}
    </div>
  );
}
