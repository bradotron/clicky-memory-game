import React from "react";

function GameCard(props) {
  return (
    <div {...props}>
      <h4>{props.name}</h4>
    </div> 
  )
}

export default GameCard;