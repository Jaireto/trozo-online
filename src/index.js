const express = require('express')
const app = express()
const io = require('socket.io')()
const path = require('path')
// const engine  = require('react-engine')

app.set('port', process.env.PORT || 3000)

app.use(express.static('./public'))

// io.on('connection', socket =>{
//     socket.send('hi')
// })

// io.on("disconnect", () => {
//     console.log("Client disconnected")
// });

app.get('/', (req, res) => res.sendFile('index.html'))

app.listen(app.get('port'), function(){
    console.log(`server listening on port ${app.get('port')}`)
})