const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/', (req, res) => res.send('asd'))


router.get('/api/funciona', (req, res) => {
    res.json({
        body: 'funciona'
    })
})

module.exports = router