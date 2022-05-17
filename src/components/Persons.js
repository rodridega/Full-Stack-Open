import React from "react";
import { deleteNumber } from "../services/services";

export const Persons = ({ persons, search, setPersons, setMessage }) => {
  const handleDelete = async (id) => {
    const personToDelete = persons.find((person) => person.id === id);

    if (window.confirm(`Eliminar a ${personToDelete.name}???`)) {
      await deleteNumber(personToDelete).then(() => {
        setPersons(persons.filter((person) => person.id !== personToDelete.id));
        setMessage(`${personToDelete.name} Eliminado`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      });
    }
  };

  return (
    <div>
      {persons
        .filter((person) =>
          person?.name.toLowerCase().includes((search || "").toLowerCase())
        )
        .map((person) => (
          <div key={person.id}>
            <p>
              {person.name} {person.number}{" "}
            </p>
            <button onClick={() => handleDelete(person.id)}>Borrar</button>
          </div>
        ))}
    </div>
  );
};
