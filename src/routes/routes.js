const express = require('express')
const root = './public'
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile('index.html'),{
        root
    }
})

router.use((req, res, next) => {

    

    next()
})

router.get('/canvas', (req, res) =>{
    res.sendFile('index.html', {
        root
    })
})

module.exports = router