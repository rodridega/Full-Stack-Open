import React from "react";

export const Content = ({ parts }) => {
  return (
    <div>
      <ul>
        {parts.map((part) => (
          <li key={part.id}>
            Nombre: {part.name} <br/>
            Ejercicios: {part.exercises}
          </li>
        ))}
      </ul>
    </div>
  );
};
