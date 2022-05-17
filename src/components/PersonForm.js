import React from "react";
import { addNumber, updateNumber } from "../services/services";

export const PersonForm = ({
  newName,
  newNumber,
  setNewName,
  setNewNumber,
  persons,
  setPersons,
  setMessage,
}) => {
  const handleNewName = (e) => {
    setNewName(e.target.value);
  };
  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleNew = async (e) => {
    e.preventDefault();

    const newEntry = {
      name: newName,
      number: newNumber,
    };

    if (
      persons.find(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      const newPerson = persons.find(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      );
      if (
        window.confirm(
          `${newName} ya esta en la agenda, desea reemplazar el nuevo numero?`
        )
      ) {
        const numberToUpdate = await updateNumber(newPerson.id, newEntry);
        setPersons(
          persons.map((person) =>
            person.id === newPerson.id ? numberToUpdate : person
          )
        );
        setNewName("");
        setNewNumber("");
        setMessage(`${newName} Actualizado`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      }
      return;
    }

    await addNumber(newEntry)
      .then((newNote) => {
        setPersons(persons.concat(newNote));
        setNewName("");
        setNewNumber("");
        setMessage(`${newName} Agregado a la agenda`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleNew}>
      <h2>Add new</h2>
      <div>
        name: <input type={"text"} value={newName} onChange={handleNewName} />
      </div>
      <div>
        number:{" "}
        <input type={"tel"} value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
