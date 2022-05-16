import { useState } from "react";

const AddFormColor = (props) => {
  // Componenta create cu scopul de a fi form add pentru culorile din gradient

  const [color, setColor] = useState("#000000");

  const handleClick = () => {
    props.handleClick({ color });
  };

  return (
    <>
      <label className="form-label">Pick your gradient</label>
      <br></br>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="form-input"
      ></input>
      <br></br>
      <button onClick={handleClick} className="form-button">
        Add
      </button>
    </>
  );
};
export default AddFormColor;
