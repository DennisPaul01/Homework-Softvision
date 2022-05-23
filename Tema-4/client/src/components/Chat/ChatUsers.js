import { useEffect, useState } from "react";
import img1 from "../../assets/profile1.png";
import img2 from "../../assets/profile2.png";
import img3 from "../../assets/profile3.png";

const ChatUsers = ({ socket, dataUser }) => {
  const [users, setUsers] = useState([]);

  // stocarea tuturor userilor
  useEffect(() => {
    socket.on("allUsers", (users) => {
      setUsers(users);
    });
  }, []);

  // setare avatar
  const imageAvatar = (img) => {
    if (img === "img1") {
      return img1;
    } else if (img === "img2") {
      return img2;
    } else {
      return img3;
    }
  };

  // afisare useri in lista
  const usersList = users
    .filter((allUsers) => allUsers.name !== dataUser.name)
    .map((data, index) => {
      return (
        <div className="chat-users-status" key={`user-${index}`}>
          <img src={imageAvatar(data.avatar)} alt="Profile Foto"></img>
          <div
            className="chat-users-status"
            style={{
              backgroundColor: data.status === true ? "#3ba58a" : "red",
            }}
          ></div>
          <h3>{data.name}</h3>
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
