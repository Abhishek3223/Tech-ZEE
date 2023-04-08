const express = require('express')
const app = express();
const port = 5000;
const mongoDB = require('./db')
mongoDB()
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json())
// app.use('/api',require('./Routes/OrderData'))
io.on("connection", (socket) => {
    socket.emit("me", socket.id);
    console.log(socket.id);
    socket.on("disconnect", () => {
        socket.broadcast.emit("callEnded")
    });

    socket.on("callUser", ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit("callUser", { signal: signalData, from, name });
    });

    socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", data.signal)
    });
});


app.get('/', function (req, res) {
    console.log("/user request called");
    res.send('welcome to backend').status(200);
});
app.use('/api', require('./Routes/CreateUser'))
app.use('/api', require('./Routes/CreateClass'))
// app.use('/api',require('./Routes/DisplayData'))
// app.listen(port, () => {

//     console.log("Listening on port 5000")
// })

http.listen(port, function () {
    console.log('listening on *:' + port);
});