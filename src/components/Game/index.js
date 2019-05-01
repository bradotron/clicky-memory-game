import React from "react";
import GameCard from "../GameCard";
import characters from "../../utils/characters";
import {shuffle} from "../../utils/helpers";


class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      characters: characters.characters,
    };

    this.randomizeCharacters = this.randomizeCharacters.bind(this);
    this.handleGameClick = this.handleGameClick.bind(this);
  }

  componentDidMount() {
    this.randomizeCharacters();
  };

  randomizeCharacters() {
    let shuffled = shuffle(this.state.characters);
    this.setState({
      characters: shuffled,
    });
  };

  handleGameClick(event) {
    this.randomizeCharacters();
  };


  render() {
    return (
      <div className="container">
        {this.state.characters.map((character) => {
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
    );
  }
}

export default Game;
