import React, { createContext, useReducer } from "react";

const initialState = {
  message: {
    text: "",
    status: false,
  },
  showMessage: () => {},
  hideMessage: () => {},
};
//create Context
const MessageContext = createContext(initialState);

//reducer
function MessageReducer(state, action) {
  switch (action.type) {
    case "SHOW_MESSAGE":
      return { ...state, message: { status: true, text: action.payload } };
    case "HIDE_MESSAGE":
      return { ...state, message: { status: false } };

    default:
      return state;
  }
}

//provider Component
function MessageProvider({ children }) {
  const [state, dispatch] = useReducer(MessageReducer, initialState);

  // actions

  function showMessage({ message }) {
    dispatch({
      type: "SHOW_MESSAGE",
      payload: message,
    });
  }

  function hideMessage() {
    dispatch({
      type: "HIDE_MESSAGE",
    });
  }

  return (
    <MessageContext.Provider
      value={{
        message: state.message,
        showMessage,
        hideMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export { MessageContext, MessageProvider };
