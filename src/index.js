const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const root = './public'

app.set('port', process.env.PORT || 8080)
app.use(express.static('./public'))

let roomName

// app.use('/',require('./routes/routes'))

// app.get('/', (req, res) => {
//     res.sendFile('index.html', { root })
// })

// app.post('/rooms/:roomName', (req, res) => {
//     // console.log(req.params.roomName, req.params.inputFrom)
//     roomName = req.params.roomName
    
//     res.redirect(`/canvas/${roomName}`).data
// })

//middleware auth room

app.get('/canvas/:roomName', (req, res) =>{
    console.log(req.params)
    
    // roomName = req.params.roomName
    res.sendFile('index.html', { root })
})

io.on('connection', socket =>{
    socket.join(roomName)
    io.to(roomName).emit('new user')
})


server.listen(app.get('port'), () => console.log(`server listening on port ${app.get('port')}`))