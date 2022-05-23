import { useState, useEffect } from "react";
import Message from "./Message";
import MessageForm from "./MessageForm";

const ChatBox = ({ socket }) => {
  const [allMessages, setAllMessages] = useState([]);

  // afisare timp pentru mesaje
  const now = new Date();
  const currentTime = now.toLocaleTimeString("default", {
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    socket.on("messageUser", (data) => {
      setAllMessages((prevState) => {
        return [...prevState, data];
      });
    });
  }, []);

  // emitere catre client to server
  const onSaveMessage = (message) => {
    socket.emit("messageUser", { ...message, currentTime });
    socket.emit("newNotifaction", message.userName);
  };

  return (
    <div className="chat-box">
      <div className="chat-box-list">
        {allMessages.map((data, index) => {
          return (
            <Message
              key={`message-${index}`}
              name={data.userName}
              profilePicture={data.avatar}
              message={data.message}
              time={data.currentTime}
            />
          );
        })}
      </div>
      <MessageForm sendMessageHandler={onSaveMessage} socket={socket} />
    </div>
  );
};

export default ChatBox;
