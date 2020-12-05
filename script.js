const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile('public/index.html', {root:__dirname})
})

app.get('/hola', function(req, res){
    res.send('jairo gax')
})

app.listen(3000, function(){
    console.log('listening on port 3000')
})