import img1 from "../../assets/profile1.png";
import img2 from "../../assets/profile2.png";
import img3 from "../../assets/profile3.png";

const Message = ({ name, message, profilePicture, time }) => {
  let avatarUser;
  if (profilePicture === "img1") {
    avatarUser = img1;
  } else if (profilePicture === "img2") {
    avatarUser = img2;
  } else {
    avatarUser = img3;
  }

  return (
    <div className="message">
      <div className="message-profile">
        <img src={avatarUser} alt="profile" />
        <p className="message-profile-time">{time}</p>
      </div>
      <div className="message-text">
        <h4>{name}</h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
