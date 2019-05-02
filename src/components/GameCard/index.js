import React from "react";

function GameCard(props) {
  let imgStyle = {
    width: "120px",
    height: "120px",
  };

  return (
    <img data-id={props.id} src={process.env.PUBLIC_URL + props.image} className="m-2" style={imgStyle} alt={props.name} {...props} />
  );
}

export default GameCard;
