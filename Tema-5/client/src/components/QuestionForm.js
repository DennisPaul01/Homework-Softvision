import { useState } from "react";
import plane from "../assets/plane-2.png";

const QuestionForm = ({ socket }) => {
  const [answer, setAnswer] = useState("");
  const [notificationError, setNotificationError] = useState(false);
  const [sendAnswer, setSendAnswer] = useState(false);

  // Handler pentru a trimite raspunsurile catre server
  // + check daca ii input gol
  const sendResponseHandler = () => {
    if (answer.trim() === "") {
      setNotificationError(true);
    } else {
      socket.emit("sendMessage", answer.toLowerCase());
      setSendAnswer(true);
      setNotificationError(false);
    }
  };

  // Formul
  const form = (
    <div className="question-from">
      <h1>What you are?</h1>
      <p style={{ visibility: !notificationError ? "hidden" : "visible" }}>
        !Your response must have more than 3 letters
      </p>

      <input
        type="text"
        name="name"
        placeholder="Type your answare"
        required
        onChange={(e) => {
          setAnswer(e.target.value);
        }}
      />
      <br></br>
      <button onClick={sendResponseHandler}>
        Respond <img src={plane} alt="plane" />
      </button>
    </div>
  );

  // Raspunsul la form
  const messageSent = (
    <div className="question-from">
      <h1>Thank you for your message!</h1>
    </div>
  );

  // if daca am raspuns sau nu
  return !sendAnswer ? form : messageSent;
};

export default QuestionForm;
