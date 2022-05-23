import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { io } from "socket.io-client";

import Header from "./components/Header";
import ChatPage from "./pages/ChatPage";

function App() {
  const [connectedSocket, setConnectedSocket] = useState();
  useEffect(() => {
    const socket = io("");
    socket.on("connected", (socketId) => {
      setConnectedSocket(socket);
      console.log("Connected", socketId);
    });
  }, []);

  if (!connectedSocket) {
    return <p>Waiting for connection...</p>;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Header />
            <ChatPage socket={connectedSocket} />
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
