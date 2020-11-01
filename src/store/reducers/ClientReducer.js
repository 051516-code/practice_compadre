import { Component } from "react";

const initialState = {
  clients: [
    { id: 1, name: "alessandro", lastName: "cavalcante" },
    { id: 2, name: "valentina", lastName: "cavalcante" },
    { id: 3, name: "jair", lastName: "cavalcante" },
  ],
};

//type
const ADD_CLIENT = "ADD_CLIENT";

//Reducer
function clientReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CLIENT":
      return {
        clients: [...state.clients, action.payload],
      };
    default:
      return state;
  }
}

//Actions

const addClient = (form) => {
  //consulta la bd
  return {
    type: "ADD_CLIENT",
    payload: form,
  };
};

export { initialState, clientReducer, addClient };
