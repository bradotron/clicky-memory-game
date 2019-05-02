import React from "react";

function ScoreBoard(props) {
  return (
    <div className="container border border-danger">
      <h4>Score: {props.score}</h4>
    </div> 
  )
}

export default ScoreBoard;