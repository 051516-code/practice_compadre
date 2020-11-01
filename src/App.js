import React from "react";

import "./App.css";

import { Header } from "./components/Header";
import { Content } from "./components/Content";
import Message from "./components/Message";

import { MessageProvider } from "./store/contexts/MessageContext";

function App() {
  return (
    <MessageProvider>
      <Header />
      <Message />
      <Content />
    </MessageProvider>
  );
}

export default App;
