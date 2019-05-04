import React from "react";

function Banner(props) {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Game of Thrones Memory Tester</h1>
      <p className="lead">Click all 12 to win! But remember which you've clicked, if you click on the same character you lose!</p>
      <hr></hr>
      <p>{props.message}</p>
    </div>
  );
}

export default Banner;