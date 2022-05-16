import React from "react";

export const Total = ({ parts }) => {
  return <p> Total: {parts.reduce((acc, part) => acc + part.exercises, 0)}</p>;
};
