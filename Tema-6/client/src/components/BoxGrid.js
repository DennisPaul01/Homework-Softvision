import { useState } from "react";
import { useEffect } from "react";

const BoxGrid = (props) => {
  // state create pt a fi folosit in Input ca sa facem enabel la buton, dar si pentru hightlight border pe selected box
  const [highlightBox, setHighlightBox] = useState(true);

  // destrucuturing props
  const { id, text, color } = props;

  // use efect care scoate border dupa input
  useEffect(() => {
    setHighlightBox(true);
  }, [text]);

  // handler care face hightlight border la selected box
  // dar si pasare id si color catre InputForm
  const selectBoxHandler = () => {
    setHighlightBox(!highlightBox);
    props.selectBoxHandler({ id, highlightBox, color });
  };

  return (
    <div
      onClick={selectBoxHandler}
      className="results-graphic-box"
      style={{
        background: `${color}`,
        border: !highlightBox ? "5px solid red" : "5px solid transparent",
        cursor: !highlightBox ? "default" : "pointer",
      }}
    >
      <p>{text}</p>
    </div>
  );
};

export default BoxGrid;
