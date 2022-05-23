import img1 from "../assets/profile1.png";
import img2 from "../assets/profile2.png";
import img3 from "../assets/profile3.png";
import ChatUsers from "../components/Chat/ChatUsers";
import ChatBox from "../components/Chat/ChatBox";
import Notification from "../components/Notification";
const ChatPage = ({ socket, dataUser, allUsers }) => {
  // Setare avatar
  let avatarUser;
  if (dataUser.avatar === "img1") {
    avatarUser = img1;
  } else if (dataUser.avatar === "img2") {
    avatarUser = img2;
  } else {
    avatarUser = img3;
  }

  return (
    <div className="box-exercitiu">
      <Notification socket={socket} />
      <div className="box-chat-group">
        <div className="profile-description">
          <img src={avatarUser} alt="Profile Foto"></img>
          <h2>Hello {dataUser.name}</h2>
        </div>
        <ChatUsers socket={socket} dataUser={dataUser} allUsers={allUsers} />
      </div>
      <ChatBox socket={socket} dataUser={dataUser} />
    </div>
  );
};

export default ChatPage;
