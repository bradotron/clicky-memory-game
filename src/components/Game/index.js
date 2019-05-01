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
      characters: characters.characters,
      clickedIds: [],
    };

    this.randomizeCharacters = this.randomizeCharacters.bind(this);
    this.handleGameClick = this.handleGameClick.bind(this);
  }

  componentDidMount() {
    this.randomizeCharacters();
  }

  randomizeCharacters() {
    let shuffled = shuffle(this.state.characters);
    this.setState({
      characters: shuffled
    });
  }

  handleGameClick(event) {
    console.log(event.target.getAttribute("data-id"));
    
    this.randomizeCharacters();
    // this.setState({
    //   score: this.state.score + 1,
    // })
  }

  render() {
    return (
      <div className="container">
        <ScoreBoard score={this.state.score} />
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
    );
  }
}

export default Game;
