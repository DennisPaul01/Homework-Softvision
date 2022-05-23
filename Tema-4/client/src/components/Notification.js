import { useEffect, useState } from "react";
import notificationImg from "../assets/notificare.png";

const Notification = ({ socket }) => {
  const [notificationShow, setNotificationShow] = useState(false);
  const [userNotification, setUserNotification] = useState("");

  useEffect(() => {
    socket.on("newNotifaction", (data) => {
      console.log(data);
      setNotificationShow(true);
      setUserNotification(data);
    });
    setTimeout(() => {
      setNotificationShow(false);
    }, 5000);
  }, [notificationShow]);

  return (
    <>
      {notificationShow && (
        <div className="notification">
          <img src={notificationImg} alt="*"></img>
          <p>A new message from {userNotification}</p>
        </div>
      )}
    </>
  );
};
export default Notification;
