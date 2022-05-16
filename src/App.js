import React, { useState } from "react";

export const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "321382754" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setFiltered] = useState("");
  const handleNewName = (e) => {
    setNewName(e.target.value);
    console.log(newName);

  };
  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
    console.log(newNumber);
  };

  const handleAdd = (e) => {
    e.preventDefault();


    if (persons.find((person) => person.name === newName)) {
      return alert(`${newName} ya esta en la agenda`);
    }

    const newEntry = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(newEntry));
    setNewName("");
  };
  const handleFilter = (e) => {
    setFiltered(e.target.value);

    console.log(filtered);
    /* setPersons(
      persons.map((person) => {
        return console.log(filtered);
        person.name.toLowerCase().includes(filtered);
      })
    ); */
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <label>filter shown whith: </label>
      <input onChange={handleFilter} value={filtered} />
      <form onSubmit={handleAdd}>
        <h2>Add a new</h2>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons &&
          persons.map((person, index) => (
            <li key={index}>
              {person.name} {person.number}
            </li>
          ))}
      </ul>
    </div>
  );
};
