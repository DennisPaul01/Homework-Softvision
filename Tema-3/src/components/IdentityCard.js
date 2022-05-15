import { useState } from "react";
import foto from "../assets/foto-me.png";
import qrCode from "../assets/qr-code.png";

const IdentityCard = () => {
  const [colorName, setColorName] = useState(false);

  // Toggle  function
  const toggleColor = () => {
    setColorName(!colorName);
  };
  return (
    <div className="card">
      <div className="card-image">
        <p>
          <img src={foto} alt="FOTO" />
        </p>
        <p>
          <img src={qrCode} alt="QR CODE" />
        </p>
      </div>
      <div className="card-details">
        <p className="card-title">HAWAI</p>
        <p
          className={`card-name${colorName ? "-colored" : ""}`}
          onClick={toggleColor}
        >
          Mucioiu Denis Paul
        </p>
        <p className="card-adress">
          Adress: 892 HONOLULU <br /> PLANET: Flat Earth
        </p>
        <div className="card-check">
          {colorName && (
            <p>
              This is a real ID!
              <br />
              Is not fake!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default IdentityCard;
