import React from "react";

function ScoreBoard(props) {
  return (
    <div className="row">
      <div className="col text-center">
        <h4>Score: {props.score}</h4>
      </div>
      <div className="col text-center">
        <h4>High Score: {props.highScore}</h4>
      </div>
    </div>
  );
}

export default ScoreBoard;
