import React from "react";

export const Message = ({message}) => {
  if (message === null) {
    return null;
  }

  return (
    <div className="message__box">
      <h2 className="message__content">{message} </h2>
    </div>
  );
};
