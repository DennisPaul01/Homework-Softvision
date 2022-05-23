import { useEffect, useState } from "react";
import img1 from "../../assets/profile3.png";

const ChatUsers = ({ socket }) => {
  const [users, setUsers] = useState([]);
  const uniqueUsers = [...new Set(users)];

  useEffect(() => {
    socket.on("messageUser", (data) => {
      setUsers((prevState) => {
        return [...prevState, data.userName];
      });
    });
  }, []);

  const usersList = uniqueUsers.map((data, index) => {
    return (
      <div className="chat-users-status" key={`user-${index}`}>
        <img src={img1} alt="Profile Foto"></img>
        <div className="chat-users-status"></div>
        <h3>{data}</h3>
      </div>
    );
  });

  return (
    <div className="chat-users-box">
      <h3>In the room</h3>
      {usersList}
    </div>
  );
};

export default ChatUsers;
