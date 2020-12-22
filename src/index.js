const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const morgan = require('morgan')
// const path = require('path')

app.set('port', process.env.PORT || 8080)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.static('./public'))

io.on('connection', socket =>{
    console.log('asdasdasdasdasdas')
    socket.broadcast.emit('hi')
})
app.get('/socket', (req, res) => {

    // res.send({body:'todo ok'}).statusCode(200)

    res.sendFile('index.html', {
        root:'./public'
    })
})
    
// app.use('/api',require('./routes/routes'))

app.listen(app.get('port'), () => {
    console.log(`server listening on port ${app.get('port')}`)
})