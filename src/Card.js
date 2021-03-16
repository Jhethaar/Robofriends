import React from "react";

const Card = ({ name, email, robotId }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5">
      <img src={`https://robohash.org/${robotId}?150x150`} alt="robots"></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
