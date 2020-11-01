import React, { useContext, useState, useReducer } from "react";
//importar el estado global referente a message
import { MessageContext } from "../store/contexts/MessageContext";
//importamos el reducer a usar
import {
  addClient,
  initialState,
  clientReducer,
} from "../store/reducers/ClientReducer";

export const AddClient = () => {
  const context = useContext(MessageContext);
  const [state, dispatch] = useReducer(clientReducer, initialState);
  const [form, setForm] = useState({
    id: 4,
    name: "",
    lastName: "",
  });

  //pegamos os valores do formurio e botamos no state
  function formChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function newClient(e) {
    e.preventDefault();
    dispatch(addClient(form));
    context.showMessage({ message: "thats correct pimpollou!!" });

    setTimeout(() => {
      context.hideMessage();
    }, 2500);
  }
  return (
    <div className="container">
      <form onSubmit={newClient}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={form.name}
            onChange={formChange}
            placeholder="Enter the name..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Password</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={formChange}
            placeholder="Enter the name..."
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
