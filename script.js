const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('port', process.env.PORT || 3000)

app.get('/', function(req, res){
    res.sendFile('public/index.html', {root:__dirname})
})

app.get('/hola', function(req, res){
    res.send('jairo gax')
})

app.listen(app.get('port'), function(){
    console.log(`server listening on port ${app.get('port')}`)
})