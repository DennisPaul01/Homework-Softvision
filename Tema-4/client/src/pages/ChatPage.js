import img2 from "../assets/profile2.png";

import ChatUsers from "../components/Chat/ChatUsers";
import ChatBox from "../components/Chat/ChatBox";
import Notification from "../components/Notification";

const ChatPage = ({ socket }) => {
  return (
    <div className="box-exercitiu">
      <Notification socket={socket} />
      <div className="box-chat-group">
        <div className="profile-description">
          <img src={img2} alt="Profile Foto"></img>
          <h2>Hello</h2>
        </div>
        <ChatUsers socket={socket} />
      </div>
      <ChatBox socket={socket} />
    </div>
  );
};

export default ChatPage;
