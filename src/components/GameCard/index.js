import React from "react";

function GameCard(props) {
  let imgStyle = {
    width: "100%",
    height: "auto",
  };

  let imgContainer = {
    width: "33%",
  }

  return (
    // <img data-id={props.id} src={process.env.PUBLIC_URL + props.image}  style={imgStyle} alt={props.name} {...props} />
    <div style={imgContainer}>
      <img data-id={props.id} src="https://placehold.it/150x150" className="border" style={imgStyle} alt={props.name} {...props} />
    </div>
  );
}

export default GameCard;
