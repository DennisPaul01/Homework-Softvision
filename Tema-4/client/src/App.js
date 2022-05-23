import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { io } from "socket.io-client";

import Header from "./components/Header";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [connectedSocket, setConnectedSocket] = useState();
  const [allUsers, setAllUsers] = useState([]);
  const [dataUser, setDataUser] = useState({
    name: "",
    status: false,
    avatar: "img1",
  });

  const addUsers = (data) => {
    setAllUsers((prevState) => {
      return [...prevState, data];
    });
  };

  // Handler care salveaza user-ul
  const onSaveDataUser = (data) => {
    const socket = io("");
    socket.on("connected", (socketId) => {
      setConnectedSocket(socket);
      console.log("Connected", socketId);
    });

    socket.emit("dataUser", data);
    socket.emit("allUsers", data);

    // Stocarea tuturor utilizatorilor
    socket.on("dataUser", (data) => {
      console.log(data);
      addUsers(data);
      setDataUser(data);
    });
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Header />
            {dataUser.status === false ? (
              <LoginPage loginHandler={onSaveDataUser} />
            ) : (
              <ChatPage
                socket={connectedSocket}
                dataUser={dataUser}
                allUsers={allUsers}
              />
            )}
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;
