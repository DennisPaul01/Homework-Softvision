import logo from "../assets/logo.png";
import tema from "../assets/tema.png";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-logo">
        <img src={logo} alt="Cognizant Softvision" />
      </div>
      <div className="header-name">
        <h1>La Moară la Cognizant Softvision</h1>
      </div>
      <div className="header-mark">
        <img src={tema} alt="" />
      </div>
    </header>
  );
};

export default Header;
