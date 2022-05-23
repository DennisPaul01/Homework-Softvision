import { useState, useEffect } from "react";
import Message from "./Message";
import MessageForm from "./MessageForm";

const ChatBox = ({ socket, dataUser }) => {
  const [allMessages, setAllMessages] = useState([]);

  // afisare timp pentru mesaje
  const now = new Date();
  const currentTime = now.toLocaleTimeString("default", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // adaugare mesaje
  const addMessage = (data) => {
    console.log(data);
    setAllMessages((prevState) => {
      return [...prevState, data];
    });
  };

  useEffect(() => {
    socket.on("messageUser", (data) => {
      addMessage(data);
    });
  }, []);

  // emitere catre client to server
  const onSaveMessage = (dataMesaj) => {
    socket.emit("messageUser", { ...dataUser, dataMesaj, currentTime });
    socket.emit("newNotifaction", dataUser.name);
  };

  return (
    <div className="chat-box">
      <div className="chat-box-list">
        {allMessages.map((data, index) => {
          return (
            <Message
              key={`message-${index}`}
              name={data.name}
              profilePicture={data.avatar}
              message={data.dataMesaj}
              time={data.currentTime}
            />
          );
        })}
      </div>
      <MessageForm
        sendMessageHandler={onSaveMessage}
        socket={socket}
        dataUser={dataUser}
      />
    </div>
  );
};

export default ChatBox;
