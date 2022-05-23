import { useState } from "react";
import sentPapaer from "../../assets/plane.png";

const MessageForm = (props) => {
  const [message, setMessage] = useState("");
  const sendMessageHandler = (event) => {
    event.preventDefault();
    props.sendMessageHandler(message);
    setMessage(" ");
  };
  return (
    <form className="message-form">
      <input
        type="text"
        name="name"
        placeholder="Type your message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        required
      />
      <button type="submit" onClick={sendMessageHandler}>
        <img src={sentPapaer} alt="sent"></img>
      </button>
    </form>
  );
};

export default MessageForm;
