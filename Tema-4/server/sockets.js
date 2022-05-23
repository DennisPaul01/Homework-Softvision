function listen(io) {
  io.on("connection", (socket) => {
    let room = "mainRoom";

    console.log(`a user conected as ${socket.id}`);
    socket.emit("connected", socket.id);
    socket.join(room);

    socket.on("messageUser", (data) => {
      io.in(room).emit("messageUser", data);
    });

    socket.on("newNotifaction", (data) => {
      socket.broadcast.emit("newNotifaction", data);
    });

    socket.on("disconnect", (reson) => {
      console.log(`Client ${socket.id} disconected ${reson} ${room}`);
      socket.leave(room);
    });
  });
}
module.exports = { listen };
