import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="image" />
      <div>
        <h5>{name}</h5>
        <h6>{email}</h6>
      </div>
    </div>
  );
};

export default Card;
