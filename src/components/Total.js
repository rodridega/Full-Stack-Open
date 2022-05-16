import React from "react";

export const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts.reduce((acc, part) => acc + part.exercises, 0)}
    </p>
  );
};