const app= require('express')();


const server = require('http').createServer(app);

const io = require('socket.io')(server);

//route 

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
});

io.on('connection', (socket) => {
    console.log('User connected')
    socket.on('message',(msg) => {
        io.emit('message',msg);
    });
});



server.listen(3000, () => {
    console.log('Connexion sur le port 3000 reussie');

});
