import React from "react";
import { CLientList } from "./CLientList";
import { AddClient } from "./AddClient";

export const Content = () => {
  return (
    <div className="container">
      <CLientList />
      <hr />
      <AddClient />
    </div>
  );
};
