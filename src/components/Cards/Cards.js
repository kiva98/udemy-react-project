import React from "react";
import Card from "../Card/Card";

const Cards = ({ robots }) => {
  console.log("robots");
  return (
    <>
      {robots.map((robot) => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </>
  );
};

export default Cards;
