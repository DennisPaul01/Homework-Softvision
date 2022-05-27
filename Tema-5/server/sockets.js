const ANSWERS = {};

// functie creata cu scopul de a stoca si verifica daca raspunsurile sunt dublate
function storeData(data) {
  if (ANSWERS[data]) {
    ANSWERS[data]++;
  } else {
    ANSWERS[data] = 1;
  }
}

function listen(io) {
  io.on("connection", (socket) => {
    let room = "mainRoom";

    console.log(`a user conected as ${socket.id}`);
    socket.emit("connected", socket.id);
    socket.join(room);

    socket.on("sendMessage", (data) => {
      storeData(data);
      io.in(room).emit("reciveData", ANSWERS);
    });

    socket.emit("sentData", ANSWERS);

    socket.on("disconnect", (reson) => {
      console.log(`Client ${socket.id} disconected ${reson} ${room}`);
      socket.leave(room);
    });
  });
}
module.exports = { listen };
