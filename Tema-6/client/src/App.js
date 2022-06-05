import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { io } from "socket.io-client";
import BoxGrid from "./components/BoxGrid";

import Header from "./components/Header";
import InputForm from "./components/InputForm";

function App() {
  const [connectedSocket, setConnectedSocket] = useState();
  const [matrice, setMatrice] = useState();
  const [selectedBoxId, setSelectedBoxId] = useState("");
  const [highlightBox, setHighlightBox] = useState(false);
  const [color, setColor] = useState("");

  useEffect(() => {
    const socket = io("");
    socket.on("connected", (socketId) => {
      setConnectedSocket(socket);
      console.log("Connected", socketId);
    });

    // primire matrice si stocare in state
    socket.on("sentData", (data) => {
      setMatrice(data);
    });

    // primire matrice cu text la cand facem click in InputForm
    socket.on("reciveData", (data) => {
      setMatrice(data);
    });
  }, []);

  let keysMatrice = [];
  if (matrice) {
    keysMatrice = Object.keys(matrice);
  }

  // handler care se ocupa ca un fel de state management si cu ajutorului caruia stocam id si color de la box-ul selectat de noi
  const onPassId = (data) => {
    const { id, highlightBox, color } = data;
    setSelectedBoxId(id);
    setHighlightBox(highlightBox);
    setColor(color);
  };

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
            <div className="input-box">
              <InputForm
                socket={connectedSocket}
                selectedBoxId={selectedBoxId}
                highlightBox={highlightBox}
                color={color}
              />
            </div>
            <div className="matrice-container">
              {keysMatrice.map((id) => {
                return (
                  <BoxGrid
                    key={id}
                    id={id}
                    text={matrice[id].text}
                    color={matrice[id].color}
                    selectBoxHandler={onPassId}
                  ></BoxGrid>
                );
              })}
            </div>
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
