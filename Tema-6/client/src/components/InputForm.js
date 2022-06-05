import { useState } from "react";

const InputForm = ({ socket, selectedBoxId, highlightBox, color }) => {
  const [feedback, setFeedback] = useState("");

  const [notificationError, setNotificationError] = useState(false);
  const [sendFeedback, setSendFeedback] = useState(false);

  const sendResponseHandler = () => {
    if (feedback.trim() === "") {
      setNotificationError(true);
    } else {
      // trimitere catre backend de id selected box, text feedback si culoare boxului
      socket.emit("sendFeedback", { selectedBoxId, feedback, color });
      setSendFeedback(true);
      setNotificationError(false);
    }
  };

  // Formul cu check daca input e gol si daca a fost selectat vreun box
  const form = (
    <div className="input-from">
      <h1>Enter your feedback!</h1>
      <p style={{ visibility: !notificationError ? "hidden" : "visible" }}>
        !Your response must have more than 3 letters
      </p>
      <div className="input-container">
        <input
          type="text"
          name="name"
          placeholder="Feedback"
          required
          onChange={(e) => {
            setFeedback(e.target.value);
          }}
          disabled={!highlightBox ? true : false}
        />
        <button
          onClick={sendResponseHandler}
          disabled={!highlightBox ? true : false}
        >
          Submit
        </button>
      </div>
    </div>
  );

  // Raspunsul la form
  const messageSent = (
    <div className="input-from">
      <h1>Thank you for your message!</h1>
    </div>
  );

  // if daca am raspuns sau nu
  return !sendFeedback ? form : messageSent;
};

export default InputForm;
