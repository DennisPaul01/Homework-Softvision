import { useRef, useState } from "react";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";

const LoginPage = (props) => {
  const [avatarFoto, setAvatarFoto] = useState("");

  const userName = useRef("");

  const setAvatarHandler = (event) => {
    setAvatarFoto(event.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    const dataUser = {
      name: userName.current.value,
      status: true,
      avatar: avatarFoto,
    };
    props.loginHandler(dataUser);
  };

  return (
    <div className="login">
      <form>
        <h1>Hello user</h1>
        <p>Please your image profile</p>
        <div className="login-profile-images">
          <div>
            <img src={profile1} alt="Profile 1" /> <br></br>
            <input
              type="radio"
              id="html"
              name="profile-image"
              value="img1"
              checked={avatarFoto === "img1"}
              onChange={setAvatarHandler}
            />
          </div>
          <div>
            <img src={profile2} alt="Profile 3" /> <br></br>
            <input
              type="radio"
              id="css"
              name="profile-image"
              value="img2"
              checked={avatarFoto === "img2"}
              onChange={setAvatarHandler}
            />{" "}
          </div>

          <div>
            <img src={profile3} alt="Profile 3" />
            <br></br>
            <input
              type="radio"
              id="javascript"
              name="profile-image"
              value="img3"
              checked={avatarFoto === "img3"}
              onChange={setAvatarHandler}
            />
          </div>
        </div>
        <input
          className="login-input-name"
          type="text"
          name="name"
          placeholder="Enter your name"
          ref={userName}
          required
        />
        <br />
        <button type="submit" onClick={loginHandler}>
          LOGIN
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
