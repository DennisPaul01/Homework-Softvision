const Matrice = require("./model/matrice");

const gridMatrice = new Matrice();

// functie care modifica map-ul in obiect
const matriceTransform = (data) => {
  return Object.fromEntries(data.nodeList);
};

function listen(io) {
  io.on("connection", (socket) => {
    let room = "mainRoom";

    console.log(`a user conected as ${socket.id}`);
    socket.emit("connected", socket.id);
    socket.join(room);

    // Send matrice cand se deschide aplicatia ca sa stim cate box-uri sa se creeze
    socket.emit("sentData", matriceTransform(gridMatrice));

    // Send matrice la click cand introducem feed back
    socket.on("sendFeedback", (data) => {
      // destructuring datele ce vin din frontend
      const { selectedBoxId, feedback, color } = data;

      // modificare in node
      gridMatrice.setNodeValue(selectedBoxId, feedback, color);
      console.log(gridMatrice);
      io.in(room).emit("reciveData", matriceTransform(gridMatrice));
    });

    socket.on("disconnect", (reson) => {
      console.log(`Client ${socket.id} disconected ${reson} ${room}`);
      socket.leave(room);
    });
  });
}
module.exports = { listen };
