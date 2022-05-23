import { useState } from "react";
import sentPapaer from "../../assets/plane.png";

const MessageForm = (props) => {
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");
  const sendMessageHandler = (event) => {
    event.preventDefault();
    props.sendMessageHandler({ userName, message });
    setMessage(" ");
  };
  return (
    <form className="message-form">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Type your name"
          required
          className="message-form-name"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
        />
        <input
          type="text"
          name="text"
          placeholder="Type your message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
          className="message-form-text"
        />
      </div>
      <button type="submit" onClick={sendMessageHandler}>
        <img src={sentPapaer} alt="sent"></img>
      </button>
    </form>
  );
};

export default MessageForm;
