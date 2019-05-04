import React from "react";

// import components
import Banner from "../Banner";
import GameCard from "../GameCard";
import characters from "../../utils/characters";
import ScoreBoard from "../ScoreBoard";

// import utilities
import { shuffle } from "../../utils/helpers";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      highScore: 0,
      characters: characters.characters,
      clickedIds: [],
      playing: false,
      message: "Click on any character picture to begin."
    };

    this.randomizeCharacters = this.randomizeCharacters.bind(this);
    this.handleGameClick = this.handleGameClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.gameOver = this.gameOver.bind(this);
  }

  // componentDidMount() {
  //   this.resetGame();
  // }

  resetGame() {
    this.randomizeCharacters();
    this.setState({
      score: 0,
      clickedIds: [],
      playing: false,
    });
  }

  randomizeCharacters() {
    let shuffled = shuffle(this.state.characters);
    this.setState({
      characters: shuffled
    });
  }

  handleGameClick(event) {
    console.log(this.state.playing);
    if (!this.state.playing) {
      this.setState({
        playing: true,
        message: "Don't forget who you've clicked!"
      });
    }

    let clickedId = event.target.getAttribute("data-id");
    let currentClickedIds = this.state.clickedIds;

    //console.log(event.target);

    if (this.state.clickedIds.indexOf(clickedId) >= 0) {
      // GAME OVER
      this.gameOver();
    } else {
      this.setState({
        score: this.state.score + 1
      });
      currentClickedIds.push(clickedId);
      this.setState({
        characters: currentClickedIds
      });
      //console.log(this.state.clickedIds);
    }
    this.randomizeCharacters();
  }

  gameOver() {
    this.setState({
      message: `Woops! You've clicked that character already. Your score was ${
        this.state.score
      }`
    });
    // check if the user got a new high score
    if (this.state.score > this.state.highScore) {
      this.setState({
        highScore: this.state.score
      });
    }
    this.resetGame();
  }

  render() {
    return (
      <div>
        <Banner message={this.state.message} />
        <ScoreBoard score={this.state.score} highScore={this.state.highScore} />
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
      </div>
    );
  }
}

export default Game;
