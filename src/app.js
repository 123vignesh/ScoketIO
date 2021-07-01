const express = require('express')
const app = express();

/*instead we can do 
const app=require("express")()
*/

const http = require('http').Server(app)



app.set('view engine', 'ejs')
app.set("views", __dirname);
//path to find the static content
app.use(express.static('public'))
app.use(express.static(__dirname));


app.get('/', (req, res) => {
	res.render("index")
})



server = http.listen(3000);
const io = require("socket.io")(server);

/*
const io = require("socket.io").Listen(app.listen(3000))
*/

io.on('connection', (socket) => {
    console.log('New user connected');
    
    socket.on('new_message', (data) => {        
        //broadcast the new message
        io.sockets.emit('new_message', data);   
    }) 



})

module.exports={
    server: server
}

