import React from "react";

export const Client = ({ client }) => {
  const { name, lastName } = client;
  return (
    <>
      <li className="list-group-item">
        {name} - {lastName}
      </li>
    </>
  );
};
