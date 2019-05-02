import React from "react";
import GameCard from "../GameCard";
import characters from "../../utils/characters";
import { shuffle } from "../../utils/helpers";
import ScoreBoard from "../ScoreBoard";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      highScore: 0,
      characters: characters.characters,
      clickedIds: []
    };

    this.randomizeCharacters = this.randomizeCharacters.bind(this);
    this.handleGameClick = this.handleGameClick.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  componentDidMount() {
    this.startGame();
  }

  startGame() {
    this.randomizeCharacters();
    this.setState({
      score: 0,
      clickedIds: []
    });
  }

  randomizeCharacters() {
    let shuffled = shuffle(this.state.characters);
    this.setState({
      characters: shuffled
    });
  }

  handleGameClick(event) {
    let clickedId = event.target.getAttribute("data-id");
    let currentClickedIds = this.state.clickedIds;

    console.log(event.target);

    if (this.state.clickedIds.indexOf(clickedId) >= 0) {
      // GAME OVER
      console.log("you've clicked this before");
      alert("Game Over");
      this.startGame();
    } else {
      this.setState({
        score: this.state.score + 1
      });
      currentClickedIds.push(clickedId);
      this.setState({
        characters: currentClickedIds
      });
      console.log(this.state.clickedIds);
    }
    this.randomizeCharacters();
  }

  render() {
    return (
      <div className="container border border-primary">
        <ScoreBoard score={this.state.score} />
        <div className="d-flex flex-wrap justify-content-center">
          {this.state.characters.map(character => {
            return (
              <GameCard
                key={character.id}
                id={character.id}
                name={character.name}
                image={character.image}
                onClick={this.handleGameClick}
              />
            );
          })}
        </div>
        <button onClick={this.startGame}>Reset Test</button>
      </div>
    );
  }
}

export default Game;
