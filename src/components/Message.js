import React, { useContext } from "react";
import { MessageContext } from "../store/contexts/MessageContext";

export default function Message() {
  const {
    message: { status, text },
  } = useContext(MessageContext);

  return (
    <>
      {status ? (
        <div className="container">
          <div className="alert alert-success mt-3" role="alert">
            {text}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
