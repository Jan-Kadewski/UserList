const express = require('express')
const app = express()
const port = 3000

app.get('/en/github', (req, res) =>{

    console.log(req)

    res.send('init project World!')


}) 

app.listen(port, () => console.log(`Example app listening on port ${port}!`) )