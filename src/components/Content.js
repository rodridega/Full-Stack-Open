import React from "react";
import { Part } from "./Part";

export const Content = (props) => {
  return (
    <>
      {props.parts.map((part, index) => {
        return <Part part={part} key={index}></Part>;
      })}
    </>
  );
};
