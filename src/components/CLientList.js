import React, { useEffect, useReducer } from "react";
import { initialState, clientReducer } from "../store/reducers/ClientReducer";

import { Client } from "../components/Client";

export const CLientList = () => {
  const { clients } = initialState;
  const { state, dispatch } = useReducer(clientReducer);

  useEffect(() => {
    console.log("clients ", clients);
  }, [clients]);

  return (
    <div className="mt-5">
      <ul className="list-group">
        {clients.map((client) => (
          <Client key={client.id} client={client} />
        ))}
      </ul>
    </div>
  );
};
