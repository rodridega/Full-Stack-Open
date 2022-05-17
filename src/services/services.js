import axios from "axios";
const url = "http://localhost:3001/";

export const addNumber = (newEntry) => {
  return axios
    .post(`${url}/persons`, newEntry)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteNumber = (person) => {
  const id = person.id;

  return axios
    .delete(`${url}/persons/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateNumber = (id, newEntry) => {
  const request = axios.put(`${url}/persons/${id}`, newEntry);
  return request
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
};
