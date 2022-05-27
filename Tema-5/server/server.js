const http = require("http");
const apiServer = require("./api");

const io = require("socket.io");

// aici este expres server
const httpServer = http.createServer(apiServer);

// aici legam socket de express
const socketServer = io(httpServer);

// aici separam socket code de restul sa fie mai clear
const sockets = require("./sockets.js");

const PORT = 3000;
httpServer.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
sockets.listen(socketServer);
