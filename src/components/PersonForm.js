import React from "react";

export const PersonForm = ({
  newName,
  newNumber,
  setNewName,
  setNewNumber,
  persons,
  setPersons,
}) => {
  const handleNewName = (e) => {
    setNewName(e.target.value);
  };
  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleNew = (e) => {
    e.preventDefault();

    if (
      persons.find(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      return alert(`${newName} ya esta en la agenda`);
    }

    const newEntry = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(newEntry));
    setNewName("");
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
