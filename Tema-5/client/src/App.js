import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { io } from "socket.io-client";

import img1 from "../src/assets/img-1.png";

import Header from "./components/Header";
import QuestionForm from "./components/QuestionForm";
import Results from "./components/Results";

function App() {
  const [connectedSocket, setConnectedSocket] = useState();

  // state facut ca sa inmagazine raspunsurile daca aplicatia a mai fost folosita inainte
  // (acest state va fi pasat ca si prop la Results)
  const [responses, setResponses] = useState({});

  useEffect(() => {
    const socket = io("");
    socket.on("connected", (socketId) => {
      setConnectedSocket(socket);
      console.log("Connected", socketId);
    });

    // primire date si stocare in state
    socket.on("sentData", (data) => {
      setResponses(data);
    });
  }, []);

  if (!connectedSocket) {
    return <p className="connection-message">Waiting for connection...</p>;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Header />
            <div className="question-box">
              <div className="question-image ">
                <img src={img1} alt="Hello" />
              </div>
              <QuestionForm socket={connectedSocket} />
            </div>
            <Results socket={connectedSocket} responses={responses} />
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
