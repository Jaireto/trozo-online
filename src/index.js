const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const morgan = require('morgan')
const root = './public'

app.set('port', process.env.PORT || 8080)

// app.use(morgan('dev'))
app.use(express.json())
app.use(express.static('./public'))

app.get('/canvas', (req, res) =>{
    res.sendFile('index.html', {
        root
    })
})

// io.on('connection', socket =>{
//     socket.join('room1')
// })

// io.to('room1').emit('hi')
    
// app.use('/api',require('./routes/routes'))

server.listen(app.get('port'), () => console.log(`server listening on port ${app.get('port')}`))