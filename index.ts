import {AppDataSource} from "./src/data-soure";
import express from 'express';
import bodyParser from "body-parser";
import cors from "cors"
import {router} from "./src/router/router";

const http = require("http");

const app = express();
const server = http.createServer(app);
AppDataSource.initialize().then(() => {
    console.log(" Connect Server! ")
})
const socketIo = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
})
socketIo.on("connection", (socket) => {
    console.log("New client connected" + socket.id);

    socket.on("sendDataClient", function (data) {
        socketIo.emit("sendDataServer", {data});
    })

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use('', router);
app.listen(3000, () => {
    console.log(' Connect Server! ')
})